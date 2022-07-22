Building a cloud based learning management System (LMS) exclusively for AR/VR
courses with user authentication, Custom UI, certificate generation and students to
know their performance.

System Requirements
- Client needs a full scale, cloud deployed LMS to create, publish and host
courses, and issue certifications to students.
- Certification issuance implies the LMS must also have an exams and grading
module.
- The LMS should be able to host documents (assignments / books / paper /
reading material)
- The LMS should be able to stream VoD (as course content will be largely in
video mode), and render in multiple qualities and playback speeds
- This involves all principles of HLS or DASH streaming protocols and
caching to improve serving performance.
- Students should be able to see their progress in the courses they have
enrolled.
- OpenEdx’s Tutor distribution was configured to suit client’s requirements
- Tutor has been deployed on an AWS EC2 instance.
- DNS: Porkbun
- Video serving Platform: Vimeo.

Users Profile:
● Students -
○ have credentials to access course material, questionnaires
○ will get certificates after completing a course. Students can be either
school students or college students, and we expect them to be
comfortable with using platforms like this one. Focus will be on making
a neat and understandable UI so that the platform is easy to use.
○ Be able to see their performance in the course
● Teachers
○ will add course material
○ Can update course material
○ Attach locally or externally hosted media
○ Refactor Course Modules
○ Initiate discussion posts
○ make questionnaires
● Admin
○ Provide staff permissions
○ Configure portal
○ Create and customise certificate
