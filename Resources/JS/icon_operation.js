document.querySelector('.open').addEventListener('click',function(){
    document.querySelector('.blur-back').classList.remove('hidden');
})
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.blur-back').classList.add('hidden');
})