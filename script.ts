// Selecting form and output elements
const resumeBuilderForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const profileImageInput = document.querySelector('input[type="file"]') as HTMLInputElement;

// Event listener for form submission
resumeBuilderForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Stop page reload on form submission

  // Fetching input values
  const userName = (document.getElementById('name') as HTMLInputElement).value.trim();
  const userEmail = (document.getElementById('email') as HTMLInputElement).value.trim();
  const userPhone = (document.getElementById('phone') as HTMLInputElement).value.trim();
  const userSummary = (document.getElementById('summary') as HTMLTextAreaElement).value.trim();
  const userEducationDetails = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
  const userDegree = (document.getElementById('degree') as HTMLInputElement).value.trim();
  const userSchool = (document.getElementById('school') as HTMLInputElement).value.trim();
  const graduationDate = (document.getElementById('grad-date') as HTMLInputElement).value.trim();
  const userExperience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value.trim();
  const companyName = (document.getElementById('company') as HTMLInputElement).value.trim();
  const workDates = (document.getElementById('dates') as HTMLInputElement).value.trim();
  const userSkills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

  // Handle profile image file upload
  const uploadedFile = profileImageInput.files ? profileImageInput.files[0] : null;

  if (uploadedFile) {
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
      const profileImageURL = event.target?.result as string;

      // Unique resume layout
      const uniqueResume = `
        <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 20px; padding: 20px; background: #f9f9f9; border-radius: 10px;">
          <div style="text-align: center;">
            <img src="${profileImageURL}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; border: 3px solid #e91e63; object-fit: cover;">
          </div>
          <div>
            <h2 style="color: #333; text-align: left; margin-bottom: 10px;">${userName}'s Resume</h2>
            <hr>
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> ${userEmail}</p>
            <p><strong>Phone:</strong> ${userPhone}</p>
            <h3>Summary</h3>
            <p>${userSummary}</p>
            <h3>Education</h3>
            <p><strong>Degree:</strong> ${userDegree}</p>
            <p><strong>School:</strong> ${userSchool}</p>
            <p><strong>Graduation Date:</strong> ${graduationDate}</p>
            <p>${userEducationDetails}</p>
            <h3>Work Experience</h3>
            <p><strong>Job Title:</strong> ${jobTitle}</p>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Dates:</strong> ${workDates}</p>
            <p>${userExperience}</p>
            <h3>Skills</h3>
            <p>${userSkills}</p>
          </div>
        </div>
      `;

      // Display the generated resume
      resumeDisplay.innerHTML = uniqueResume;
    };

    // Read the uploaded file
    fileReader.readAsDataURL(uploadedFile);
  } else {
    // If no profile picture is uploaded
    resumeDisplay.innerHTML = `
      <p style="color: red; font-weight: bold; text-align: center;">Please upload a profile picture to complete the resume.</p>
    `;
  }
});
