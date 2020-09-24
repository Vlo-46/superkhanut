<template>
    <div class="your-comment">
        <div class="input-field">
            <label for="name">Your name</label>
            <input type="text" id="name">
        </div>
        <div class="input-field">
            <label for="comment-email">E-mail address</label>
            <input type="email" id="comment-email">
        </div>
        <div class="input-field">
            <label for="message">Your Message</label>
            <input type="text" id="message" class="materialize-textarea">
        </div>
        <div>
            <button>Send comment</button>
        </div>
    </div>
</template>



<style scoped>
    button {
        background-color: #fff;
        color: #79b530;
        border: 1px solid #79b530;
        cursor: pointer;
        padding: 8px 22px
    }

    button:hover {
        background-color: #6ba229;
        color: #fff;
    }
</style>