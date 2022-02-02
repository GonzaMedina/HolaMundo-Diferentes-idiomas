window.onload = function(){

    var div = 
    document.querySelector('.container');
    // Div
    
    var random = 
    document.getElementById('buttonRandom');
    // Button
   
    var helloWorld = [
        'Hello Wêreld - (Afrikaans)', 
        'Përshendetje Botë - (Albanian)', 
        'ሰላም ዓለም - (Amharic)',
        ' مرحبا بالعالم - (Arabic)',
        'բարեւ աշխարհ - (Armenian)',
        'salam Dünya - (Azerbaijan)',
        'Բարեւ աշխարհ - (Armenian)',
        'Kaixo Mundua - (Basque)',
        ' নমস্কার বিশ্ব - (Bengali)',
        'Прывітанне, Свет (Belarusian)',
        'Pozdrav svijete - (Bosnian)',
        'Здравей свят - (Bulgarian)',
        'Hola món - (Catalan)',
        'Hello World - (Cebuano)',
        'Ahoj světe - (Czech)',
        'Moni Dziko Lapansi - (Chichewa)',
        '你好，世界 - (Chinese)', // 17
        '안녕하세요 세계 - (Korean)', 
        'Alo Mondyal - (Haitian Creole)',
        'Pozdrav svijete - (Croatian)',
        'Hello World - (Kurdish)',
        'Hej Verden - (Danish)',
        'שלום עולם-(Hebrew)',
        'Saluton mondo - (Esperanto)',
        'Tere, Maailm - (Estonian)',
        'Kumusta Mundo - (Filipino)',
        'Hei maailma - (Finnish)',
        'Salut Monde - (French)',
        'Hallo wrâld - (Frisian)',
        'Hàlo a Shaoghail - (Gaelic Irish)',
        'Ola mundo - (Galician)',
        'Helo Byd - (Welsh)',
        'こんにちは世界 - (Japanese)',
        'Halo Donya - (Javanese)',
        'Γειά σου Κόσμε - (Greek)',
        ' નમસ્તે દુનિયા - (Gujarati)',
        'Sannu Duniya - (Hausa)',
        'Hello World - (Hawaiian)',
        'नमस्ते दुनिया - (Hindi)',
        'Nyob zoo lub ntiaj teb no (Hmong)',
        'Ndewo Ụwa - (Igbo)',
        'Halo Dunia - (Indonesian)',
        'Hello World - (English)',
        'Dia Duit - (Irish)',
        'Halló heimur - (Island)',
        'Ciao Mondo - (Italian)',
        ' ವಿಶ್ವಕ್ಕೆ ನಮಸ್ಕಾಗಳು - (Kannada)',
        'Сәлем Әлем - (Kazakh)',
        'សួស្តី​ពិភពលោក - (Khmer)',
        'салам дүйн - (Kyrgyz)',
        'ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ - (Lao)',
        'Salmina Aduna (Fula)',
        'salve Orbis Terrarum - (Latin)',
        'Sveika pasaule - (Latvian)',
        'Labas pasauli - (Lithuanian)',
        'Moien Welt - (Luxembourgish)',
        'Здраво свету - (Macedonian)',
        ' ലോകത്തിനു നമസ്കാരം Malayalam',
        'Hai dunia - (Malay)',
        'Hello World - (Malagasy)',
        'Hello World - (Māori)',
        ' नमस्कार जगा - (Marathi)',
        'сайн уу, дэлхий - (Mongolian)',
        'नमस्कार संसार - (Nepali)',
        'Hei Verden - (Norwegian)',
        'Hallo Wereld - (Dutch)',
        'سلام نړی - (Pashto)',
        'سلام دنیا - (Persian)',
        'Witaj świecie - (Polish)',
        'Olá Mundo - (Portuguese)',
        'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ - (Punjabi)',
        'Salut lume - (Romanian)',
        'Привет,мир - (Russian)',
        'Talofa Lalolagi - (Samoan)',
        'Здраво Свете - (Serbian)',
        'Lefatše Lumela - (Sotho)',
        'Makadini mose - (Shona)',
        'سلام ورلڊ - (Sindhi)',
        'හෙලෝ වර්ල්ඩ් - (Sinhalese)',
        'ahoj svet - (Slovak)',
        'Pozdravljen, svet - (Slovene)',
        'Hello World - (Somali)',
        'Hola Mundo - (Spanish)',
        'Mo ki ò Ile Ayè - (Yoruba)',
        'Halo Dunya - (Sundanese)',
        'Hej världen - (Swedish)',
        'Salamu, Dunia - (Swahili)',
        'Салом Ҷаҳон - (Tajik)',
        'สวัสดีชาวโลก - (Thai)',
        ' வணக்கம் உலகம் - (Tamil)',
        'Hallo Welt - (German)',
        ' ప్రపంచానికి వందనాలు - (Telugu)',
        'Merhaba Dünya - (Turkish)',
        'Habari Dunia - (Kiswahili)',
        'Привіт Світ - (Ukrainian)',
        'Helló Világ - (Hungarian)',
        'ہیلو دنیا - (Urdu)',
        'Salom Dunyo - (Uzbek)',
        'Chào thế giới - (Vietnamese)',
        'Molo Lizwe - (Xhosa)',
        'העלא וועלט - (Yiddish)',
        'Mo ki O Ile Aiye - (Yoruba)',
        'Sawubona Mhlaba - (Zulu)'
        // +100 different languages
    ]   // Random "Hello World"
    

    
        // This function displays 
        // the words every 1.5 seconds
       setInterval(function () {
        var randomizer = 
        Math.floor(Math.random() 
        * helloWorld.length) 
        // Randomizer
       
       // Resize the font for the
       // Malayam language
       if (randomizer==57) 
       div.style.fontSize="1em"
       else div.style.fontSize="1.3em"
       
        div.innerHTML = 
        helloWorld[randomizer]; 
        // Div Content
        
        if (div.className 
        == "container animateOff")
        div.className = "container animateOn"

    
        setTimeout (function(){
            div.className = 
            "container animateOff"
        },800)

    },1500)

};

/**************************************

    I want to thank the community for 
      his help to improve my code 
     and translate some words and 
      naturally... for the +1000
     upvotes, thank you very much!

***************************************/