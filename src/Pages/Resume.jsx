import React from 'react';

const Resume = () => {
  return (
    <section className="resume-section container my-5">
      <h2 className="text-center mb-4">Resume</h2>

      
      <div className="text-center mb-4">
        <a href="" download className="btn btn-secondary">
          Download My Full Resume
        </a>
      </div>
      
      
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Profile</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt, aut ducimus maiores numquam sequi id voluptates facilis doloremque maxime corrupti quibusdam ullam suscipit, earum possimus tempore in reiciendis. Tempora!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, sunt, aut ducimus maiores numquam sequi id voluptates facilis doloremque maxime corrupti quibusdam ullam suscipit, earum possimus tempore in reiciendis. Tempora!</p>
        </div>
      </div>

      
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Experience</h3>
          <ul>
            <li><strong>General Contracter — 2020–Present</strong></li>
            <p>Planning all significant project development and implementation details</p>
            <p>Understanding the material and equipment specifications and procuring them</p>
            <p>Predicting potential changes and formulating risk mitigation strategies</p>
            <p>Fulfilling legal and regulatory concerns</p>
            <p>Establishing effective communication among all project participants</p>
            <li><strong>Machinist, Progress Railroad-2015–2020</strong></li>
            <p>Reading blueprints: Machinists interpret blueprints to understand the design of machines, including the structure and dimensions of various parts.</p>
            <p>Setting up and operating machine tools: Machinists use machine tools such as lathes, milling machines, and grinders to cut, shape, drill, and finish metal and other materials. </p>
            <p>Maintaining records: Machinists keep records of approved and defective units or final products. </p>
          </ul>
        </div>
      </div>

      
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Education</h3>
          <p><strong>Full Stack Application Development Bootcamp, Ohio State University</strong></p>
          <p>Completion Date: October 2024</p>
          <p><strong>High School Diploma, Norwood High School</strong></p>
          <p>Completion Date: 2014</p>
        </div>
      </div>

     
      <div className="card resume-card mb-4">
        <div className="card-body">
          <h3 className="card-title">Skills</h3>
          <ul>
            <li><strong>Languages:</strong> JavaScript, HTML, CSS, SQL</li>
            <li><strong>Frameworks/Libraries:</strong> Node.js, Express.js, React, Bootstrap, Tailwind CSS, jQuery</li>
            <li><strong>Databases:</strong> MongoDB, SQL</li>
            <li><strong>Tools/Technologies:</strong> Git, GitHub, RESTful APIs, AJAX, JSON, AI Technologies</li>
          </ul>
        </div>
      </div>

     

      

      

    </section>
  );
};

export default Resume;