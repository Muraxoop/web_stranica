<!DOCTYPE html>
<html lang="hr">

<!-- Skripte za jQuery i Bootstrap -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/stil.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>Mura Luxury Motorcars</title>
</head>

<body>

    <header class="sticky-header">
        <div class="logo">
            <a href="index.html">
                <img src="../images/Logo.png" alt="Logo">
            </a>
        </div>
        <nav>
            <ul class="nav navbar-nav">
                <li><a href="ONama">O nama</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Kupi vozilo <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="inventar.html">Inventar</a></li>
                        <li class="dropdown-submenu">
                            <a class="test" href="#">Traži po proizvođaču</a>
                            <ul class="submenu dropdown-menu">
                                <li><a href="Audi.html">AUDI</a></li>
                                <li><a href="BMW.html">BMW</a></li>
                                <li class="proizvodac"><a href="Chevrolet.html">CHEVROLET</a></li>
                                <li class="proizvodac"><a href="Ferrari.html">FERRARI</a></li>
                                <li class="proizvodac"><a href="Ford.html">FORD</a></li>
                                <li class="proizvodac"><a href="Lamborghini.html">LAMBORGHINI</a></li>
                                <li class="proizvodac"><a href="McLaren.html">MCLAREN</a></li>
                                <li class="proizvodac"><a href="Mercedes.html">MERCEDES</a></li>
                                <li class="proizvodac"><a href="Porsche.html">PORSCHE</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="kontakt.html">Kontakt</a></li>
            </ul>
        </nav>
    </header>








        <!-- Dodatak ispod videa za pretragu po proizvođaču -->
        <div class="search-by-manufacturer">
            <li class="manufacturer-link">Traži po proizvođaču</li>
        </div>
    
        <!-- Dodani logotipi ispod "Traži po proizvođaču" -->
        <div class="manufacturer-logos">
            <a href="Porsche.html"><img src="../images/porsche-logo.jpg" alt="Porsche"></a>
            <a href="Audi.html"><img src="../images/audi-logo.jpg" alt="Audi"></a>
            <a href="Lamborghini.html"><img src="../images/lamborghini-logo.jpg" alt="Lamborghini"></a>
            <a href="BMW.html"><img src="../images/bmw-logo.png" alt="BMW"></a>
            <a href="Ferrari.html"><img src="../images/ferrari-logo.png" alt="Ferrari"></a>
            <a href="Mercedes.html"><img src="../images/mercedes-logo.png" alt="Mercedes"></a>
            <a href="McLaren.html"><img src="../images/mclaren-logo.png" alt="McLaren"></a>
            <a href="Ford.html"><img src="../images/ford-logo.jpg" alt="Ford"></a>
            <a href="Chevrolet.html"><img src="../images/Chevrolet-logo.webp" alt="Chevrolet"></a>
        </div>

    <style>
        /* Dodatni stilovi za hover dropdown */
        .dropdown-submenu:hover .submenu {
        display: block;
        left: 100%; /* Pomicanje submenija na desnu stranu */
        top: 50%; /* Postavljanje na istu visinu kao i roditeljski li element */
        }

        /* Dodatni stilovi za hover dropdown */
        .dropdown-submenu:hover .submenu {
            display: block;
            left: 100%; /* Pomicanje submenija na desnu stranu */
            top: 50%; /* Postavljanje na istu visinu kao i roditeljski li element */
        }

        .manufacturer-logos {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 20px;
        }

        .manufacturer-logos a {
            display: block;
        }

        .manufacturer-logos img {
            display: block;
            height: 120px; 
            height: auto; /* Omogućuje responzivnost */
        }

        .manufacturer-logos a {
            display: block;
            height: 120px; /* Postavljanje fiksne visine */
        }

        .manufacturer-logos img {
            max-height: 100%;
            max-width: 100%;
        }

        .search-by-manufacturer {
            background-color: black; /* Crna pozadina */
            padding: 10px; /* Dodaj padding za bolju vidljivost */
            text-align: center; /* Centriraj tekst */
        }

        .manufacturer-link {
            color: white;
            text-decoration: none;
            font-weight: bold;
            display: block;
        }
        body {
            margin: 0;
            padding: 0;
            background-color: black; /* Postavljanje crne pozadine na cijelu stranicu */
            font-family: 'Arial', sans-serif;
        }

    
    </style>

</body>

</html>