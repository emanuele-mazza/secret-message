const { hash } = window.location;

const message = atob(hash.replace(/#/, ''));
    
if(message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector("#message-show").classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
};



document.querySelector("form").addEventListener('submit',(event) => {
    //prevent page to reload
    event.preventDefault();
    //get value from form
    const input = document.querySelector("#message-input");
    //encrypt the value
    const encrypted = btoa(input.value);
    //hide input form div and show second input div
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide')
    //select second input
    const linkInput = document.querySelector("#link-input");
    //assign to second input and select
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
    
});