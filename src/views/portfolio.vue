<template>
    <main>

        <h1 class="page-title">My Projects</h1>

        <section class="portfolio-section">
            <div class="reimbursement">
                <image src="/reimbursementPhoto.png" alt="The Login In Page" class="login-image"></image>
                <u>
                    <h3 class="project-title">UDM Reimbursement Management System</h3>
                </u>
                <h4 class="reimbursement-desc">
                    I worked with three other students to program
                    and design a system to completely overhaul how the
                    University of Detroit Mercy reimburses their faculty.
                    Our goal was to put the system completely online, making
                    it more efficient and user friendly, saving the faculty
                    time they could be using for their classes.
                    <br><br>
                    This project has provided me with several opportunities to
                    practice important skills such as teamwork, front-end languages,
                    back-end languages, clieant communication, and project management.
                    <br><br>
                    Languages: HTML, CSS, JavaScript (Node.js, Vue.js), Github, Vercel

                </h4>
            </div>
            <div class="seagrant">
                <image src="/seagrant.png" alt="Palmer Park Outline" class="login-image"></image>
                <u>
                    <h3 class="project-title">Michigan Sea Grant Research</h3>
                </u>
                <h4 class="seagrant-desc">
                    I had the privelage of being awarded
                    a Michigan Sea Grant, where I worked on Using Google Earth
                    Enginer to Evaluate How Urban Forests in Detroit Impact the
                    Distribution and Movement of Water.
                    <br><br>
                    This project provided me with the opportunity to conduct my own
                    research over the summer and gave me valuable experience in data
                    extraction, visualization, and interpretation.
                    <br><br>
                    Languages/Software: Google Earth Engine API, JavaScript, Excel
                </h4>
            </div>
            <div class="instructionset">
                <image src="/instructionset.png" alt="Palmer Park Outline" class="login-image"></image>
                <u>
                    <h3 class="project-title">Technical Writing Instruction Set</h3>
                </u>
                <h4 class="instructionset-desc">
                    This was a project required as part of my technical writing course
                    at UDM that I believe showcases my ability to guide and teach. The
                    document is designed to instruct readers how to create a batch file
                    to open multiple PC applications at once. I personally designed each
                    image in a way that prevents confusion and the instructions in
                    a way that are easy to follow.
                    <br><br>
                    In this project I was able to demonstrate and practice non-technical skills
                    that are valuable in the professional world such as communication and teaching.
                    Logo and icon design was done in inkscape to ensure a clean and easy to follow UI.
                    <br><br>
                    Languages/Software: Batch Scripts, Inkscape, Notepad++
                </h4>
            </div>
        </section>
    </main>
</template>

<style scoped>
.page-title {
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-family: 'Monoton', sans-serif;
}

.project-title {
    font-size: 20px;
}

.portfolio-section {
    display: flex;
    justify-content: center;
    margin: 100px 0px;
    column-gap: 120px;
    flex-wrap: wrap;
}

.login-image {
    width: 325px;
    height: 225px;
}

.reimbursement {
    width: auto;
    max-width: 325px;
}

.seagrant {
    width: auto;
    max-width: 325px;
}

.instructionset {
    width: auto;
    max-width: 325px;
}
</style>