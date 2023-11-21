<template>
    <main>
        <section class="about-me-section">
            <div class="about-me">
                <h3>About me</h3>
                <h4 class="about-me-description">
                    I am currently a computer
                    science major and cyber security minor at the
                    University of Detroit Mercy. Although I am still
                    searching for my niche, I have found I enjoy
                    backend development as well as research with an
                    intent to go into teaching.


                </h4>
                <h4 class="about-me-description">
                    In my personal time I enjoy gaming with friends
                    and bettering my cyber security skills. Some of
                    my favorite games are ones that challenge me
                    to think creatively and out of the box.
                </h4>
            </div>
            <div class="links">
                <h3>Links</h3>

                <h4>LinkedIn: <a href="https://www.linkedin.com/in/ethan-scheys/" target="_blank"> Ethan Scheys</a></h4>
                <h4>Github: <a href="https://github.com/scheysej" target="_blank">scheysej</a></h4>
            </div>
        </section>
    </main>
</template>

<style>
.about-me-section {
    display: flex;
    justify-content: center;
    margin: 100px 0px;
    column-gap: 100px;
    flex-wrap: wrap;
}

.about-me-description {
    width: auto;
    max-width: 500px;
}

.about-me h3,
.links h3 {
    font-family: 'Monoton';
    font-size: 40px;
    margin-bottom: 0px;
}

.about-me h4 {
    line-height: 25px;
    font-size: 15px;
}
</style>