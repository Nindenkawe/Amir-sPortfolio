<template>
    <div class="absolute bottom-0 right-2 text-2xl md:text-sm container max-w-sm p-2 dark:bg-gray-800 dark:border-gray-700 w-auto text-sm text-left text-gray-500 dark:text-gray-400 border-gray-200 rounded-lg shadow-md">
      <div class="float-none" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <img class="rounded w-36 h-36" src="../assets/bitme/help.png" alt="Help">
      </div>
      <p class="text-sm text-gray-900 dark:text-white">
      {{Greetings}}
<!--       <p>
      <span>{{Amir.En}}</span>
      <span>{{Amir.Arb}}</span>
      </p> -->
    </p>
  
      <div id="input-line">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input type="text" name="user_name" class="max-w-sm placeholder:italic placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
           dark:text-white " required placeholder="Name"
           autofocus>
          <label>Email</label>
          <input type="email" name="user_email" class="max-w-sm placeholder:italic placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
           dark:text-white " required placeholder="Email">
          <label>Message</label>
          <textarea name="message" class="max-w-sm placeholder:italic placeholder:text-slate-400 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
           dark:text-white " required placeholder="Message"></textarea>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><input type="submit" value="Send"></button>
        </form>
      </div>    
    </div>
</template>

<script>
  export default{
    data() {
    return {
      Banner:["hellp"],
      Header: null,
      Greetings: "Thank you for taking the time, feel free to live a message",
      send_mail: null,
      Amir:{
        En:"Amir",
        Arb:"اَمير"
      }
    }

  },
/*   methods: {
    sendEmail() {
      emailjs.sendForm('service_proc73q', 'template_tan6hxt', this.$refs.form, 'E0ZB1wQ8lpnKAp0RD')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  } */
  }
</script>