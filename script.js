document.addEventListener('DOMContentLoaded', function(){
    const question = document.querySelectorAll('.question');

    question.forEach(header => {
        header.addEventListener('click', () => {
            const faq = header.parentElement;
            const isActive = faq.classList.contains('active')

            document.querySelectorAll('.faq').forEach(item => {
                item.classList.remove('active')
                item.querySelector('.icon-open').style.display = 'block';
                item.querySelector('.icon-close').style.display = 'none';
                item.querySelector('.answer').style.maxHeight = '0'
            })

            if(!isActive){
                faq.classList.add('active')
                header.querySelector('.icon-open').style.display = 'none';
                header.querySelector('.icon-close').style.display = 'inline';
                const content = faq.querySelector('.answer');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                faq.classList.remove('active')
                header.querySelector('.icon-open').style.display = 'block';
                header.querySelector('.icon-close').style.display = 'none';
                const content = faq.querySelector('.answer');
                content.style.maxHeight = '0';
            }
        })
    })
})