let semanticCore ={
    logo:{
        'ua':'Лого',
        'en':'Logo',
        'pl':'Logo',
    },
    home:{
        'ua':'Дім',
        'en':'Home',
        'pl':'Dom',
    },
    about:{
        'ua':'Про нас',
        'en':'About',
        'pl':'O nas',
    },
    service:{
        'ua':'Сервіс',
        'en':'Service',
        'pl':'Usługa',
    },
    contact:{
        'ua':'Контакти',
        'en':'Contact',
        'pl':'Kontakt',
    },
    text:{
        'ua':'Тестовий текст',
        'en':'test text',
        'pl':'tekst testowy',
    },
    iphone7:{
        'ua':'Айфон 7',
        'en':'Iphone 7',
        'pl':'Iphone 7',
    },
    iphone8:{
        'ua':'Айфон 8',
        'en':'Iphone 8',
        'pl':'Iphone 8',
    },
    iphone14:{
        'ua':'Айфон 14',
        'en':'Iphone 14',
        'pl':'Iphone 7',
    },
}
let lang='en'
ua.onclick = function(){
    lang='ua'
    changeUrl()


}
en.onclick = function(){
    lang='en'
    changeUrl()

    
    
}
pl.onclick = function(){
    lang='pl'
    changeUrl()

    
    
}
function changeUrl(){
    location.href=window.location.pathname+'#'+lang
    location.reload()
}
function changeLanguage() {
    let hash = (window.location.hash).substring(1);

    for (let key in semanticCore) {
        $('.lang-' + key).text(semanticCore[key][hash]);
        console.log(key);
    }
}
changeLanguage()