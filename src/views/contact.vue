<template>
    <main class="contact-me-section">
        <h3>Contact me</h3>
        <div class="card">
            <h4>Email: <a href="https://mail.google.com/mail/u/0/?fs=1&to=ethanscheys@gmail.com&su=Subject&body=Body&tf=cm"
                    target="_blank">ethanscheys@gmail.com</a></h4>
        </div>
    </main>
</template>

<style scoped>
.contact-me-section {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: column;
}

.contact-me-section h3 {
    font-size: 35px;
    font-weight: 500;
    margin-top: 80px;
}

.card {
    background-color: #2D2A2A;
    padding: 0px 50px;
}

.card h4 {
    background-color: #2D2A2A;
}

.card a {
    background-color: #2D2A2A;
}
</style>