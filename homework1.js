let cart = [];
let cartIndex = 0;
let historyCart = [];
let historyIndex = 0;
let historyCount = [];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let menu = {
  1: { name: "Roti Bun", price: 10000 },
  2: { name: "Chicken curry pastry", price: 10000 },
  3: { name: "Crombo'o cappuccino", price: 10000 },
  4: { name: "Crombo'o choco green tea", price: 10000 },
  5: { name: "Crombo'o tiramisu", price: 10000 },
  6: { name: "Martabak croissant", price: 10000 },
  7: { name: "Cheese pastry", price: 10000 },
  8: { name: "Beef pastry", price: 10000 },
  9: { name: "Butter croissant", price: 10000 },
  10: { name: "Sultana pastry", price: 10000 },
};

function printMenu() {
  let indexProduct = 1;
  while (menu[indexProduct] !== undefined) {
    console.log(
      `${indexProduct}. ${menu[indexProduct].name}: Rp. ${menu[indexProduct].price},-`
    );
    indexProduct++;
  }
}

function viewMenu() {
  console.log("\n=============== Menu Roti'o ===============");
  printMenu();
  console.log("99. Kembali ke Menu Utama");
  console.log("==========================================");

  rl.question("Masukkan nomor menu (1-10, atau 99 untuk kembali): ", (item) => {
    item = parseInt(item);

    if (item === 99) {
      // Kembali ke menu utama
      return dashBoard();
    }

    if (menu[item] === undefined) {
      console.log("❌ Menu tidak tersedia. Silakan coba lagi.");
      return viewMenu();
    }

    rl.question("Masukkan jumlah pesanan: ", (qty) => {
      qty = parseInt(qty);

      if (isNaN(qty) || qty <= 0) {
        console.log("❌ Jumlah tidak valid. Silakan ulangi.");
        return viewMenu();
      }

      cart[cartIndex] = { item, qty };
      cartIndex++;

      console.log("✅ Pesanan berhasil ditambahkan ke keranjang!");
      dashBoard();
    });
  });
}

function order() {
  console.log("\n=== Keranjang Pesanan ===");
  if (cartIndex === 0) {
    console.log("Belum ada pesanan.");
    dashBoard();
  } else {
    let grandTotal = 0;
    let i = 0;
    do {
      const c = cart[i];
      const m = menu[c.item];
      const subTotal = m.price * c.qty;
      grandTotal += subTotal;
      console.log(`${i + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-`);
      i++;
    } while (i < cartIndex);

    console.log("------------------------------------------");
    console.log(`Total semua pesanan: Rp. ${grandTotal},-`);

    rl.question("Apakah Anda ingin checkout? (y/n): ", (answer) => {
      if (answer.toLowerCase() === "y") {
        // Simpan isi keranjang dan jumlah item sebelum reset
        historyCart[historyIndex] = [...cart];
        historyCount[historyIndex] = cartIndex;
        historyIndex++;

        console.log("\n✅ Terima kasih telah berbelanja di Roti'o Bakery!");
        cart = [];
        cartIndex = 0;

        dashBoard();
      } else {
        console.log("❗ Pesanan belum di-checkout.");
        dashBoard();
      }
    });
  }
}

function history() {
  console.log("\n=== Riwayat Pesanan ===");

  if (historyIndex === 0) {
    console.log("Belum ada pesanan yang di-checkout.");
  } else {
    for (let h = 0; h < historyIndex; h++) {
      console.log(`\nCheckout ke-${h + 1}:`);
      let grandTotal = 0;
      const keranjang = historyCart[h];
      const jumlahItem = historyCount[h];

      for (let i = 0; i < jumlahItem; i++) {
        const c = keranjang[i];
        const m = menu[c.item];
        const subTotal = m.price * c.qty;
        grandTotal += subTotal;
        console.log(`  ${i + 1}. ${m.name} x ${c.qty} = Rp. ${subTotal},-`);
      }

      console.log(`  Total Checkout ${h + 1}: Rp. ${grandTotal},-`);
    }
  }

  rl.question("\nTekan ENTER untuk kembali ke menu...", () => {
    dashBoard();
  });
}

function dashBoard() {
  console.log("\n=== Welcome to Roti'o Bakery ===");
  console.log("1. Lihat Menu");
  console.log("2. Lihat Keranjang");
  console.log("3. Riwayat Pesanan");
  console.log("4. Keluar");
  console.log("================================");

  rl.question("Masukkan pilihan Anda: ", (choice) => {
    switch (choice) {
      case "1":
        viewMenu();
        break;
      case "2":
        order();
        break;
      case "3":
        history();
        break;
      case "4":
        console.log("👋 Terima kasih! Sampai jumpa!");
        rl.close();
        break;
      default:
        console.log("❌ Pilihan tidak valid. Silakan coba lagi.");
        dashBoard();
    }
  });
}

dashBoard();
