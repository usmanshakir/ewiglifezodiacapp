var zodiacs = [
    {
    name : "Aries",
    image : "images/aries.png",
    month : "March 21-April 20",
    description : "Aries loves to be number one, so it's no surprise that these audacious rams are the first sign of the zodiac. ... These fire signs think after they leap, which often results in lessons learned the hard way. Aries represents the singular spirit (while Aries's opposite sign, Libra, symbolizes partnership)."
},
{
    name : "Taurus",
    image : "images/taurus.png",
    month : "April 20 to May 20",
    description : "The zodiac sign being a bull reveals a few things right off the bat: Tauruses are known for being unwavering, strong-willed, and steadfast in their opinions. And if you're a Taurus, then you've probably come to terms with being known for your stubbornness, a common attribute for the sign"
},
{
    name : "Gemini",
    image : "images/gemini.png",
    month : "May 21 - June 20",
    description : "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. Read your sign's full profile here. Next, read this month’s Gemini horoscope predictions."
},
{
    name : "Cancer",
    image : "images/cancer.png",
    month :  "June 21 - July 22",
    description : "Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore, representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive, and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies of a room. Read your sign's full profile here. Next, read this month’s Cancer horoscope predictions."
},
{
    name : "Leo",
    image : "images/leo.png",
    month :  "July 23 - August 22",
    description : "Roll out the red carpet, because Leo has arrived. Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves. Read your sign's full profile here. Next, read this month’s Leo horoscope predictions."
},
{
    name : "Virgo",
    image : "images/virgo.png",
    month :  "August 23 - September 22",
    description : "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice. Read your sign's full profile here. Next, read this month’s Virgo horoscope predictions."
},
{
    name : "Libra",
    image : "images/libra.png",
    month :  "September 23 - October 22",
    description : "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life. Read your sign's full profile here. Next, read this month’s Libra horoscope predictions."
},
{
    name : "Scorpio",
    image : "images/scorpio.png",
    month :  "October 23 - November 21",
    description : "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm. Read your sign's full profile here. Next, read this month’s Scorpio horoscope predictions."
},
{
    name : "Sagittarius",
    image : "images/sagittarius.png",
    month :  "November 22 - December 21",
    description : "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. Read your sign's full profile here. Next, read this month’s Sagittarius horoscope predictions."
},
{
    name : "Capricorn",
    image : "images/capricorn.png",
    month :  "December 22 - January 19",
    description : "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms. Read your sign's full profile here. Next, read this month’s Capricorn horoscope predictions."
},
{
    name : "Aquarius",
    image : "images/aquarius.png",
    month :  "January 20 - February 18",
    description : "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. Read your sign's full profile here. Next, read this month’s Aquarius horoscope predictions."
},
{
    name : "Pisces",
    image : "images/pisces.png",
    month :  "February 19 - March 20",
    description : "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces's attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. Read your sign's full profile here. Next, read this month’s Pisces horoscope predictions."
}
]

function getData(){
    var userSearch = document.getElementById('user-search').value.toLocaleLowerCase();
    for(var i = 0; i < zodiacs.length; i++ ){
        if(userSearch === zodiacs[i].name.toLowerCase()){
            document.getElementById('name').innerHTML = zodiacs[i].name;
            document.getElementById('date').innerHTML = zodiacs[i].month;
            document.getElementById('img').src = zodiacs[i].image;
            document.getElementById('text-result').innerHTML = zodiacs[i].description;
        }
    }
}