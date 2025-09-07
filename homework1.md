# Flowchart Roti'o

### Fungsi viewMenu

```mermaid
flowchart LR

start((start))
stop(((stop)))
outputViewMenu[/
1 Roti bun
2 Chicken curry pastry
3 Crombo'o cappucino
4 Crombo'o choco green tea
5 Crombo'o tiramisu
6 Martabak croissant
7 Cheese pastry
8 Beef pastry
9 Butter croissant
10 Sultana pastry
/]
inputItemViewMenu[/Input nilai item/]
setItemViewMenu[Set item = inputItemViewMenu]
inputQtyViewMenu[/Input qty/]
setQtyViewMenu[Set qty = inputQty]
itemViewMenu["Set item=parseInt(item)"]
qtyViewMenu["Set qty=parseInt(qty)"]
cartViewMenu["Set cart[cart.length]={item, qty}"]
outputResultViewMenu[/Pesanan berhasil ditambahkan/]
dashboard["Dashboard()"]

start-->outputViewMenu
outputViewMenu-->inputItemViewMenu
inputItemViewMenu-->setItemViewMenu
setItemViewMenu-->inputQtyViewMenu
inputQtyViewMenu-->setQtyViewMenu
setQtyViewMenu-->itemViewMenu
itemViewMenu-->qtyViewMenu
qtyViewMenu-->cartViewMenu
cartViewMenu-->outputResultViewMenu
outputResultViewMenu-->dashboard
dashboard-->stop

```

<!-- let cart = [];
let cartIndex = 0;
let historyCart = [];
let historyIndex = 0;
let historyCount = []; -->

### Fungsi history

```mermaid
flowchart TB

start((start))
stop(((stop)))
cartIndex["Set let cartIndex = 0"]
historyCart["Set historyCart[]"]
historyIndex["Set historyIndex = 0"]
historyCount["Set historyCount = []"]
menu["Set menu{}"]
outputRiwayat[/ Riwayat Pesanan /]
dcs1{historyIndex === 0}
outputNone[/ Belum ada pesanan /]
h[h=0]
dcs2{h < historyIndex}
h++
co[/Checkout ke-h+1 /]
gT[grandTotal=0]
jumlahItem
keranjang["Set keranjang = historyCart[h]"]
jumlahItem["jumlahItem = historyCount[h]"]
i[i=0]
dcs3{i < jumlahItem}
i++
c["Set c = keranjang[i]"]
m["Set m = menu[c.item]"]
subTotal["Set subTotal = m.price * c.qty"]
grandTotal["Set grandTotal += subTotal"]
outputSubtotal[/"${i + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-"/]
outputGrandtotal[/"Total Checkout ${h + 1}: Rp. ${grandTotal},-"/]

start-->cartIndex
cartIndex-->historyCart
historyCart-->historyIndex-->historyCount-->menu
menu-->outputRiwayat
outputRiwayat-->dcs1
dcs1--ya-->outputNone-->stop
dcs1--tidak-->h
h-->dcs2
dcs2--ya-->co-->
dcs2--tidak-->stop
co-->gT
gT-->keranjang-->jumlahItem
jumlahItem-->i
i-->dcs3
dcs3--ya-->c
dcs3--tidak-->stop
c-->m
m-->subTotal
subTotal-->grandTotal
grandTotal-->outputSubtotal
outputSubtotal-->i++
i++-->dcs3
i++-->outputGrandtotal
outputGrandtotal-->h++
h++-->dcs2

```

### Fungsi order

```mermaid
flowchart TB

start((start))
stop(((stop)))
cartIndex["Set let cartIndex = 0"]
historyCart["Set historyCart[]"]
historyIndex["Set historyIndex = 0"]
historyCount["Set historyCount = []"]
menu["Set menu{}"]
outputKeranjang[/ Keranjang Pesanan /]
dcs1{cartIndex === 0}
outputNone[/ Belum ada pesanan /]
dsh1["dashboard()"]
gT[grandTotal=0]
i[i=0]
c["Set c = cart[i]"]
m["Set m = menu[c.item]"]
subTotal["Set subTotal = m.price * c.qty"]
grandTotal["Set grandTotal += subTotal"]
output1[/"${i + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-"/]
i++
dcs2{i < cartIndex}
output2[/"Total semua pesanan: Rp. ${grandTotal},-"/]

inputCheckout[/Input nilai checkout/]
setAnswer[Set answer = inputCheckout]
dcs3{answer=y}
historyCart2["Set historyCart[historyIndex] = [...cart]"]
historyCart3["Set historyCount[historyIndex] = cartIndex"]
historyIndex++
output3[/"Terima kasih telah berbelanja di Roti'o Bakery!"/]
cart2["Set cart = []"]
cartIndex2["Set cartIndex=0"]
dsh2["dashboard()"]

output4[Pesanan belum di-checkout.]
dsh3["dashboard()"]

start-->cartIndex-->historyCart-->historyIndex-->historyCount
historyCount-->menu
menu-->outputKeranjang
outputKeranjang-->dcs1
dcs1--ya-->outputNone
outputNone-->dsh1-->stop
dcs1--tidak-->gT
gT-->i
i-->dcs2
dcs2--ya-->c
c-->m-->subTotal
subTotal-->grandTotal-->output1
output1-->i++-->dcs2

dcs2--tidak-->output2
output2-->inputCheckout-->setAnswer
setAnswer-->dcs3
dcs3--ya-->historyCart2-->historyCart3-->historyIndex++
historyIndex++-->output3-->cart2-->cartIndex2-->dsh2-->stop
dcs3--tidak-->output4-->dsh3-->stop


```

### Fungsi dashboard

```mermaid
flowchart TB

start((start))
stop(((stop)))
fitur[/1 Lihat menu
2 Lihat keranjang
3 Riwayat Pesanan
4 Keluar/]
input[/Input /]
answer[Set choice = input]

dcs1{choice=1}
dcs2{choice=2}
dcs3{choice=3}
dcs4{choice=4}

viewMenu["viewMenu()"]
order["order()"]
history["history()"]
dashboard["dashboard()"]

output4[/Terima kasih! Sampai jumpa!/]
output5[/Pilihan tidak valid./]


start-->fitur-->input
answer[Set choice = input]
input-->answer-->dcs1
dcs1--ya-->viewMenu-->break
dcs1--tidak-->dcs2
dcs2--ya-->order-->break
dcs2--tidak-->dcs3
dcs3--ya-->history-->dashboard-->break
dcs3-->tidak-->dcs4
dcs4--ya-->output4-->stop
dcs4--tidak-->output5-->dashboard


```

### Run Function

```mermaid
flowchart TB

dash["dashboard()"]

```
