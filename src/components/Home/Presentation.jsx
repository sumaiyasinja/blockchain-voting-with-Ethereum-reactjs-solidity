import logo from "../../assets/images/logo.png";

const Presentation = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#0C134F] rounded-2xl">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
        
             <img src={logo} alt="" width={200}/> 
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#9BA4B5] sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next{' '}
              <span className="inline-block text-deep-purple-accent-400">
                election
              </span>
            </h2>
            <p className="text-base text-white md:text-lg">
             Do you want to host a secure vote from using web3? We can help you. 
            </p>
          </div>
          <div>
            <a
              href="/ballot"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-white"
            >
              Host Your Election Now
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="
              https://img.freepik.com/free-photo/young-beautiful-hispanic-woman-smiling-confident-putting-vote-ballot-box-electoral-college_839833-31915.jpg 



              "              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="
              https://img.freepik.com/premium-vector/young-man-putting-vote-into-ballot-box_113065-775.jpg  "
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="
              https://img.freepik.com/free-vector/flat-design-international-day-democracy-background-with-voting_23-2148607147.jpg  "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Presentation;