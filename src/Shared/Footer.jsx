import React from 'react';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    
    <div className='flex items-center '>
                    <img width="45" height="45" className='ml-1 hidden lg:block' src="https://img.icons8.com/fluency/48/job.png" alt="job" />
                    <a className="btn btn-ghost text-xl mt-2 hidden md:block">JOB<span className='font-bold text-blue-700'>HUNT</span></a>
                </div>
    <p>
     You can find your dream job here <br />
     <span className='ml-8 font-bold text-xl text-blue-400'>& also</span> <br />
     Make job opportunities to others.
     
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-blue-400 font-bold">Services</h6>
    <a className="link link-hover">Find desired job</a>
    <a className="link link-hover">Easy Apply</a>
    <a className="link link-hover">Create job post</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;