const FAQ = () => {
  return (
    <div className="card bg-base-200 max-w-6xl mx-auto p-6 my-4">
      <div>
        <h2 className="text-4xl font-bold text-center">FAQ</h2>
      </div>
      <div className="collapse collapse-arrow bg-base-200 ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I sign up and log in to the Assignment Management System?
        </div>
        <div className="collapse-content">
          <p>
            To sign up or log in, simply use Firebase Authentication. You can
            sign up with your email and password or use social media login
            options like Google or Facebook. Once logged in, you’ll have access
            to all the features of the platform based on your role (student or
            teacher).
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I track my assignment progress and deadlines?
        </div>
        <div className="collapse-content">
          <p>
            Yes, the system allows both teachers and students to track
            assignments in real time. Students can see their upcoming deadlines,
            while teachers can monitor assignment submissions and provide
            feedback or grades directly through the platform.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do teachers create and manage assignments?
        </div>
        <div className="collapse-content">
          <p>
            Teachers can create new assignments from their dashboard, setting
            details like due dates, descriptions, and grading criteria. Teachers
            can also update or delete assignments, review student submissions,
            and leave feedback, all from the same interface.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is my data and assignment information secure?
        </div>
        <div className="collapse-content">
          <p>
            Yes, user authentication is handled securely by Firebase
            Authentication, ensuring that only authorized users can access the
            platform. Additionally, your assignment data is stored securely in
            MongoDB, with JWT tokens ensuring secure sessions and protection
            against unauthorized access.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I access the platform on multiple devices?
        </div>
        <div className="collapse-content">
          <p>
            Yes, the platform is designed to be fully responsive, meaning you
            can access your assignments and manage tasks from any device with an
            internet connection, whether it’s a computer, tablet, or smartphone.
            Your data will always stay synced across devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
