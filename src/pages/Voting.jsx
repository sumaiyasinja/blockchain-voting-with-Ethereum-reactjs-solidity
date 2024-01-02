import React, { useEffect } from "react";
import { Alert, Box, Button, Container, Divider, Paper, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";

const Voting = ({
    voting,
    account,
    setLoading,
    getChoices,
    choices,
    getBallotDetails,
    ballot,
    visible,
    ended,
    getCurrentState,
    endVoting,
    totalVote,
    getTotalVotes,
    checkIsVoter,
    hasVoted,
    isVoter,
    state,
    getVoters,
    totalVoters,
    setContract,
    contract,
}) => {
    const doVote = async (val) => {
        setLoading(true);
        await voting.methods
            .doVote(val)
            .send({ from: account })
            .on("error", (error) => {
                toast.error(error.message);
            })
            .on("receipt", (receipt) => {
                toast.success("Vote casted successfully.");
                checkIsVoter();
                getTotalVotes();
            });
        setLoading(false);
    };

    useEffect(() => {
        if (ballot.name && contract) {
            getChoices();
            getTotalVotes();
            checkIsVoter();
            getCurrentState();
            getVoters();
        }
    }, [getChoices, getTotalVotes, checkIsVoter, getCurrentState, getVoters, ballot, contract]);

    return (
<<<<<<< HEAD
        <div style={{ backgroundColor:'#010b2e' }}>
 <Container style={{ height: '100%'  }}>
            <Box py={10} sx={{bacgroundColor:'#0C134F'}}>
                <Paper p={6} sx={{paddingTop:'40px', bacgroundColor:'#FFF' , width:'100%',height:'100%'}}>
                    <Box py={1} >
=======
        <Container style={{ height: '100vh' }}>
            <Box py={4}>
                <Paper>
                    <Box py={1}>
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                        <Typography variant="h4" fontWeight="bold" textAlign="center">
                            Get Ballot
                        </Typography>
                    </Box>
                    <Divider />
<<<<<<< HEAD
                    <Box  paddingY={6} p={3}  sx={{backgroundColor:"#FFF", width:'100%',height:'100%'}}>
=======
                    <Box margin={2} paddingY={2}>
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                        <form onSubmit={getBallotDetails}>
                            <Box my={2}>
                                <TextField
                                    value={contract}
                                    name="name"
                                    id="outlined-basic"
                                    label="Ballot Address"
                                    variant="outlined"
                                    onChange={(e) => setContract(e.target.value)}
                                    fullWidth
                                />
                            </Box>
                            {ballot.name && ballot.address && ballot.proposal && (
                                <Box my={2} display="flex" justifyContent="space-between">
                                    <Box>
<<<<<<< HEAD
                                        <Typography color={'white'} variant="h6" fontWeight="bold">
=======
                                        <Typography variant="h6" fontWeight="bold">
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                                            Ballot Name
                                        </Typography>
                                        <Typography>{ballot.name}</Typography>
                                    </Box>
                                    <Box>
<<<<<<< HEAD
                                        <Typography color={'white'} variant="h6" fontWeight="bold">
=======
                                        <Typography variant="h6" fontWeight="bold">
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                                            Proposal
                                        </Typography>
                                        <Typography>{ballot.proposal}</Typography>
                                    </Box>
                                    <Box>
<<<<<<< HEAD
                                        <Typography color={'white'}  variant="h6" fontWeight="bold">
=======
                                        <Typography variant="h6" fontWeight="bold">
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                                            Ballot Address
                                        </Typography>
                                        <Typography>{ballot.address}</Typography>
                                    </Box>
                                </Box>
                            )}

                            <Box>
<<<<<<< HEAD
                                <Button  variant="contained" type="submit" fullWidth>
=======
                                <Button variant="contained" type="submit" fullWidth>
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                                    Get Ballot
                                </Button>
                            </Box>
                        </form>
                        <Box mt={2}>
                            {state === 0 && <Alert severity="warning">Voting hasn't started yet.</Alert>}
                            {state === 2 && (
                                <Alert severity="warning">Voting has ended. Please check the result.</Alert>
                            )}
                        </Box>
                    </Box>
                </Paper>
                {visible && isVoter && (
<<<<<<< HEAD
                    <Paper p={2}>
=======
                    <Paper>
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
                        <Box py={1}>
                            <Typography variant="h4" fontWeight="bold" textAlign="center">
                                Vote Now
                            </Typography>
                        </Box>
                        <Divider />
                        <Box margin={2} paddingY={2}>
                            <Typography variant="h6">
                                {hasVoted
                                    ? "You've already casted your vote."
                                    : "Click on the Button to cast your vote."}
                            </Typography>
                            <Divider />
                            <Box display="flex" justifyContent="space-around" my={3}>
                                {choices?.map((val, ind) => {
                                    return (
                                        <Box key={ind}>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                sx={{ padding: "2rem", borderRadius: "50%" }}
                                                onClick={() => doVote(val)}
                                                disabled={hasVoted}
                                            >
                                                {val}
                                            </Button>
                                        </Box>
                                    );
                                })}
                            </Box>
                            {totalVote !== 0 && (
                                <>
                                    <Divider />
                                    <Alert severity="success">
                                        {totalVote} / {totalVoters} have already casted their vote.
                                    </Alert>
                                </>
                            )}
                        </Box>
                    </Paper>
                )}
                {ballot.name && ballot.address === account && state === 1 && (
                    <Paper>
                        <Box margin={2} paddingY={2}>
                            {totalVote !== 0 && (
                                <>
                                    <Divider />
                                    <Alert severity="success">
                                        {totalVote} / {totalVoters} has/have already casted their vote.
                                    </Alert>
                                </>
                            )}
                            <Box mt={2}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="secondary"
                                    fullWidth
                                    onClick={endVoting}
                                    disabled={ended}
                                >
                                    End Voting
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                )}
            </Box>
        </Container>
<<<<<<< HEAD
        </div>
       
=======
>>>>>>> d312fe25be3b84ed9685e8a65e63134107cf798a
    );
};

export default Voting;
