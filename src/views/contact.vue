<template>
    <section class="contact-form">
        <h3 style="font-size:45px; font-family:Monoton;">Contact Me</h3>
        <form ref="form" @submit.prevent="sendEmail">
            <div class="nameEmail">
                <span>
                    <label style="font-size: 18px">Name</label><br />
                    <input v-model="name" class="nameTB" type="text" name="user_name" placeholder="Enter Full Name">
                </span>
                <span>
                    <label style="font-size: 18px">Email</label><br />
                    <input v-model="email" class="emailTB" type="email" name="user_email" placeholder="Enter Email">
                </span>
            </div>
            <div class="messageSection">
                <span>
                    <label style="font-size: 18px">Message</label><br />
                    <textarea v-model="message" class="messageTB" name="message"
                        placeholder="Enter Sweet Little Nothings"></textarea>
                </span>
            </div>
            <input class="sendBT" type="submit" value="Send">
        </form>
    </section>
</template>
  
<script lang='ts'>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_co6d4n8', 'template_atqqmtn', this.$refs.form, 'YDNUrNvAgv7wcllkA')
                .then((result) => {
                    alert("Message Sent!")
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
</script>

<style scoped>
.contact-form {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.nameEmail {
    display: flex;
    gap: 100px;
    margin-top: 25px;
}

.nameTB,
.emailTB,
.messageTB {
    background-color: white;
    height: 50px;
    margin-top: 12px;
    border: 4px;
    width: 275px;
    color: black;
}

.messageTB {
    width: 655px;
    height: 250px;
}

.messageSection {
    margin-top: 24px;
    display: flex;
}

.sendBT {
    margin-top: 20px;
    background-color: white;
    color: black;
    border: 4px;
    height: 50px;
    width: 100px;
    cursor: pointer;

}

.sendBT:hover {
    background-color: lightgray;
}

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
    font-family: 'Monoton', sans-serif;
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