

const Banner = () => {
    return (
        <div>
             <div
        className="hero min-h-[91vh]"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-5xl text-black font-semibold mb-10">I Grow By Helping People In Need</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered w-[700px] pr-16"
              />
              <button className="btn bg-red-500 text-white normal-case  absolute top-0 hover:text-black right-0 rounded-l-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default Banner;