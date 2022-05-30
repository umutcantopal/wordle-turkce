var oyun = new Oyun();

var randSayi = Math.floor((Math.random() * besHarfliKelimeler.length) + 1);
oyun.kelime = besHarfliKelimeler[randSayi];
oyun.girilenKelime = "";
oyun.girilenKelimeler = [];

var klavyeGirdiFunction = function(klavyeGirdi){
	if(oyun.girilenKelimeler.length < 6 && oyun.durum != "bitti")
	{
		var kutular = document.getElementsByClassName("harf-kutu");
		var harfGirilecekKutuSayisi = (oyun.girilenKelimeler.length*5)+(oyun.girilenKelime.length);
		var harfGirilecekKutu = kutular[harfGirilecekKutuSayisi];
		var harfCikartilacakKutu;
				
		for(var i=0;i<harfler.length;i++)
		{		
			if(klavyeGirdi == harfler[i])
			{
				if(oyun.girilenKelime.length < 5)
				{
					oyun.girilenKelime += klavyeGirdi;
					harfGirilecekKutu.innerText = klavyeGirdi;
					harfGirilecekKutu.classList.add("dolu");
				}
			}
			else if(klavyeGirdi == "Backspace" || klavyeGirdi == "backspace")
			{
				if(oyun.girilenKelime.length === 0)
				{
					harfCikartilacakKutu = harfGirilecekKutu;
				}
				else
				{
					harfCikartilacakKutu = kutular[harfGirilecekKutuSayisi - 1];
				}
				//yeni satıra geçince bir önceki satırın son harfini silmemesi için if else yazdım
				oyun.girilenKelime = oyun.girilenKelime.slice(0, -1);//ilk harfi iki kere backspace basınca silmemesi için en sona getirdim.
				harfCikartilacakKutu.innerText = "";
				harfCikartilacakKutu.classList.remove("dolu");
				break;
			}
			else if(klavyeGirdi == "Enter" || klavyeGirdi == "enter")
			{
				enter(kutular);
				break;
			}
		}
	}
	else
	{
		console.log("oyun bitti");
	}
}

//eventlistener
window.addEventListener("keyup", ()=>{klavyeGirdiFunction(event.key)});
document.getElementById("klavye").addEventListener("click", ()=>{klavyeGirdiFunction(event.target.getAttribute("data-key"))});