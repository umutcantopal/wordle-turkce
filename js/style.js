var harf_kutu = document.getElementsByClassName("harf-kutu");
var baslikYukselik = document.getElementById("baslik").clientHeight; /* offsetHeight */
if(document.body.clientWidth > 600)
{
	document.getElementById("oyun-alani").style.height = (window.innerHeight*90/100) - baslikYukselik;;

	for(var i=0;i<harf_kutu.length;i++)
	{
		harf_kutu[i].style.width = harf_kutu[0].clientHeight + "px"; //genişlik ve yüksekliği eşitlemek için kullandım.
		harf_kutu[i].style.height = harf_kutu[0].clientHeight + "px"; //harf girince kutunun boyutu değişmemesi için sabit yükseklik verdim.
	}
	
	window.addEventListener("resize", function(){
		var baslikYukselik = document.getElementById("baslik").clientHeight; /* offsetHeight */
		document.getElementById("oyun-alani").style.height = (window.innerHeight*90/100) - baslikYukselik;
	});
}
else
{
	document.getElementById("oyun-alani").style.height = (window.innerWidth*90/100) - baslikYukselik;
	
	for(var i=0;i<harf_kutu.length;i++)
	{
		harf_kutu[i].style.fontSize = "2em";
		harf_kutu[i].style.width = harf_kutu[0].clientHeight + "px";
		harf_kutu[i].style.height = harf_kutu[0].clientHeight + "px"
	}
		
	window.addEventListener("resize", function(){
		var baslikYukselik = document.getElementById("baslik").clientHeight; /* offsetHeight */
		document.getElementById("oyun-alani").style.height = (window.innerWidth*90/100) - baslikYukselik;
	});
}

//harfleri eklemek
var klavyeSatir = document.getElementsByClassName("klavye-satir");

for(var i=0;i<klavyeSatir.length;i++)
{
	for(var x=0;x<klavyeHarfler[i].length;x++)
	{
		var klavyeButton = "<button data-key="+klavyeHarfler[i][x]+">"+klavyeHarfler[i][x]+"</button>";
		if(klavyeHarfler[i][x] == "backspace")
		{
			klavyeButton = "<button class='fa-solid fa-delete-left fa-lg' data-key="+klavyeHarfler[i][x]+"></button>";
		}
		klavyeSatir[i].innerHTML += klavyeButton;
	}
}
