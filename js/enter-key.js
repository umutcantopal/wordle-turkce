function enter(kutular)
{
	if(oyun.girilenKelime.length != 5)
	{
		mesajKutusGoster("Eksik Harf");
		setTimeout(mesajKutusGizle, 2000);
	}
	
	if(oyun.girilenKelime.length == 5 && oyun.girilenKelimeler.length < 6)
	{
		var kelimeArray = oyun.kelime.split("");
		var girilenKelimeArray = oyun.girilenKelime.split("");
		var bicimlendirilecekKutuİndex;
					
		for(var i=0;i < kelimeArray.length;i++)
		{
			bicimlendirilecekKutuİndex = (oyun.girilenKelimeler.length * 5) + i;
			var deger = 0; //0 gri, 1 sarı, 2 yeşil
			if(girilenKelimeArray[i] == kelimeArray[i])
			{
				deger = 2;
				kelimeArray[i] = null;
				girilenKelimeArray[i] = null;
				// break;
			}
			else
			{
				for(var x=0; x < kelimeArray.length;x++)
				{
					if(i != x && girilenKelimeArray[i] == kelimeArray[x] && girilenKelimeArray[x] != kelimeArray[x])
					{
						deger = 1;
						kelimeArray[x] = null;
						// girilenKelimeArray[x] = null;
					}
				}
			}
			switch(deger)
			{
				case 0:
				kutular[bicimlendirilecekKutuİndex].style.backgroundColor = "#d3d3d3";
				kutular[bicimlendirilecekKutuİndex].style.borderColor = "#d3d3d3";
				break;
							
				case 1:
				kutular[bicimlendirilecekKutuİndex].style.backgroundColor = "#f3f1a6";
				kutular[bicimlendirilecekKutuİndex].style.borderColor = "#f3f1a6";
				break;
							
				case 2:
				kutular[bicimlendirilecekKutuİndex].style.backgroundColor = "#a6e395";
				kutular[bicimlendirilecekKutuİndex].style.borderColor = "#a6e395";
				break;
			}
			kutular[bicimlendirilecekKutuİndex].style.color = "#fffff3";
		}
		oyun.girilenKelimeler.push(oyun.girilenKelime);
					
		oyun.girilenKelime = "";
	}

	for(var i=0;i<oyun.girilenKelimeler.length;i++)
	{
		if(oyun.girilenKelimeler[i] == oyun.kelime)
		{			
			mesajKutusGoster("Oyun Bitti <br /> <span id='yeni-oyun-baslat'>Yeni Oyun Başlat</span>");
			oyun.durum = "bitti";	
			break;
		}
		if(oyun.girilenKelimeler.length == 6 && oyun.durum != "bitti")
		{
			mesajKutusGoster("Oyun Bitti <br />Kelime: "+oyun.kelime+"<br /><span id='yeni-oyun-baslat'>Yeni Oyun Başlat</span>");
			oyun.durum = "bitti";
			break;
		}
	}

	function mesajKutusGoster(mesaj)
	{
		var mesajKutusu = document.getElementsByClassName("mesaj-kutusu")[0];
		mesajKutusu.classList.toggle("mesaj-kutusu-acik");
		mesajKutusu.innerHTML = mesaj;
		
		//display değerini değiştirince mesaj kutusunu tam ortalamak için alttaki satırları ekledim
		var marginLeftDeger = (mesajKutusu.clientWidth/2)*-1; //mobilde kutu ekrana sığmadığı için width değerini olması gerektiğinden eksik alıyor ve tam ortalanmıyor.
		console.log(marginLeftDeger);
		mesajKutusu.style.top = "50%"; //top ve left değerlerini css dosyasına yazmadım
		mesajKutusu.style.left = "50%";//çünkü left değeri kutunun ekrandan taşmasını engelliyor ve kutu olması gerektiğinden küçük width değeri alıyor.
		mesajKutusu.style.marginLeft = marginLeftDeger;
		// console.log(marginLeftDeger);
	}
	function mesajKutusGizle()
	{
		document.getElementsByClassName("mesaj-kutusu")[0].classList.toggle("mesaj-kutusu-acik");
	}
}