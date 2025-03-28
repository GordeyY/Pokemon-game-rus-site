var date = new date();
alert( date.getMonth() );
    if(date !== 12)
        {
            document.head.insertAdjacentHTML('beforeend', '<link rel="apple-touch-icon" sizes="180x180" href="img/icon/game_rus.png"> <link rel="icon" type="image/png" sizes="32x32" href="img/icon/game_rus.png"> <link rel="icon" type="image/png" sizes="16x16" href="img/icon/game_rus">');
        }
        else 
        {
            document.head.insertAdjacentHTML('beforeend', '<link rel="apple-touch-icon" sizes="180x180" href="img/icon/game_rus_crismas.png"> <link rel="icon" type="image/png" sizes="32x32" href="img/icon/game_rus_crismas.png"> <link rel="icon" type="image/png" sizes="16x16" href="img/icon/game_rus_crismas.png">');
        }