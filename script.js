//  OPEN
 
 // Fungsi untuk melakukan permintaan fetch ke URL tertentu dan menampilkan data ke dalam <select>
 function fetchDataAndPopulateSelect(url) {
    const fileSelect = document.getElementById('fileSelectKata');

    fetch(url)
        .then(response => {
            // Memeriksa apakah respons dari permintaan adalah OK (berhasil)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Mengembalikan respons dalam bentuk JSON
            return response.json();
        })
        .then(data => {

            // Mengurutkan data berdasarkan nama file (ascending)
            data.sort((a, b) => a.name.localeCompare(b.name));

            // Menggunakan data yang diterima untuk membuat <option> dalam <select>
            data.forEach(file => {
                const option = document.createElement('option');
                option.value = file.id;
                option.textContent = file.name;
                fileSelect.appendChild(option);
            });
        })
        .catch(error => {
            // Menangani kesalahan jika terjadi
            console.error('Terjadi kesalahan:', error);
        });
}

// Panggil fungsi fetchDataAndPopulateSelect saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbxw2XafV48h-WraHLXLFTXjv1EyickC2tOwVhtay97gMVUCMfbAPqqdD9gO6yyAMY5T/exec'; // Ganti URL_WEB_APP dengan URL web app yang sesuai
    fetchDataAndPopulateSelect(apiUrl);
});

// Fungsi untuk melakukan permintaan fetch ke URL tertentu dan menampilkan data ke dalam <select>
    function fetchDataAndPopulateSelect2(url2) {
    const fileSelect = document.getElementById('fileSelectKarate');

    fetch(url2)
        .then(response => {
            // Memeriksa apakah respons dari permintaan adalah OK (berhasil)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Mengembalikan respons dalam bentuk JSON
            return response.json();
        })
        .then(data => {

            // Mengurutkan data berdasarkan nama file (ascending)
            data.sort((a, b) => a.name.localeCompare(b.name));

            // Menggunakan data yang diterima untuk membuat <option> dalam <select>
            data.forEach(file => {
                const option = document.createElement('option');
                option.value = file.id;
                option.textContent = file.name;
                fileSelect.appendChild(option);
            });
        })
        .catch(error => {
            // Menangani kesalahan jika terjadi
            console.error('Terjadi kesalahan:', error);
        });
}

// Panggil fungsi fetchDataAndPopulateSelect saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl2 = 'https://script.google.com/macros/s/AKfycbwiM82Ds7-kSfwv8snQzqUaNY7E4Mj0DEmxz9VHGyzvu4HTvy39HwtHJJJ8qawPvwBofQ/exec'; // Ganti URL_WEB_APP dengan URL web app yang sesuai
    fetchDataAndPopulateSelect2(apiUrl2);
});



// Fungsi untuk mengambil data dari web app (Google Apps Script) dan menampilkan dalam tabel di card body
function fetchDataFromWebApp(spreadsheetId) {
    const url = `https://script.google.com/macros/s/AKfycbw2c4utoi_mBIGMwfCVfPilsAxHuDmPEqQhMGCaMUff_mRtunnOlMIMJKxHzbPVo_Z3/exec?id=${spreadsheetId}`; // Ganti URL_WEB_APP dengan URL web app yang telah Anda deploy

    // Tampilkan loading spinner saat memuat data
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';

            // Menghapus card yang sebelumnya ditampilkan (jika ada)
            const card = document.querySelector('.data-kata');
            if (card) {
                card.style.display = 'none';
            }

            // Membuat tabel HTML dari data
            const table = document.createElement('table');
            table.className = 'table table-hover';

            // Membuat header tabel dari keys (nama kolom) pada objek pertama
            const headers = Object.keys(data[0]);
            const headerRow = table.insertRow();
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });

            // Memasukkan data ke dalam baris tabel
            data.forEach(item => {
                const row = table.insertRow();
                headers.forEach(header => {
                    const cell = row.insertCell();
                    cell.textContent = item[header];
                });
            });

            // Menampilkan tabel dalam card body
            const dataTableContainer = document.getElementById('dataTableContainer');
            dataTableContainer.innerHTML = ''; // Kosongkan konten sebelumnya
            dataTableContainer.appendChild(table);

            // Tampilkan card dengan tabel
            card.style.display = 'block';
            dataTableContainer.style.display = 'block'; // Tampilkan container tabel
        })
        .catch(error => {
            console.error('Error fetching data from web app:', error);
            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';
        });
}

// Panggil fungsi fetchDataFromWebApp saat <select> dipilih
document.getElementById('fileSelectKata').addEventListener('change', event => {
    const selectedSpreadsheetId = event.target.value;
    if (selectedSpreadsheetId) {
        fetchDataFromWebApp(selectedSpreadsheetId);
    }
});



  // Fungsi untuk mengambil data dari web app (Google Apps Script) dan menampilkan dalam tabel di card body
function fetchDataFromWebApp2(spreadsheetId) {
    const url = `https://script.google.com/macros/s/AKfycbxA7DQ05yYTsiIQJCU_Z91AxblCrbxavoYJz9MfgGZt4iGJ-kjF1swChv3HeKYsdXXO/exec?id=${spreadsheetId}`; // Ganti URL_WEB_APP dengan URL web app yang telah Anda deploy || script di buat di email maclodas

    // Tampilkan loading spinner saat memuat data
    const loadingSpinner = document.getElementById('loadingSpinner2');
    loadingSpinner.style.display = 'block';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';

            // Menghapus card yang sebelumnya ditampilkan (jika ada)
            const card = document.querySelector('.data-karate');
            if (card) {
                card.style.display = 'none';
            }

            // Membuat tabel HTML dari data
            const table = document.createElement('table');
            table.className = 'table table-hover';

            // Membuat header tabel dari keys (nama kolom) pada objek pertama
            const headers = Object.keys(data[0]);
            const headerRow = table.insertRow();
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });

            // Memasukkan data ke dalam baris tabel
            data.forEach(item => {
                const row = table.insertRow();
                headers.forEach(header => {
                    const cell = row.insertCell();
                    cell.textContent = item[header];
                });
            });

            // Menampilkan tabel dalam card body
            const dataTableContainer = document.getElementById('dataTableContainer2');
            dataTableContainer.innerHTML = ''; // Kosongkan konten sebelumnya
            dataTableContainer.appendChild(table);

            // Tampilkan card dengan tabel
            card.style.display = 'block';
            dataTableContainer.style.display = 'block'; // Tampilkan container tabel
        })
        .catch(error => {
            console.error('Error fetching data from web app:', error);
            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';
        });
}

// Panggil fungsi fetchDataFromWebApp saat <select> dipilih
document.getElementById('fileSelectKarate').addEventListener('change', event => {
    const selectedSpreadsheetId = event.target.value;
    if (selectedSpreadsheetId) {
        fetchDataFromWebApp2(selectedSpreadsheetId);
    }
});



// FESTIVAL

 // Fungsi untuk melakukan permintaan fetch ke URL tertentu dan menampilkan data ke dalam <select>
 function fetchDataAndPopulateSelectF(urlf) {
    const fileSelect = document.getElementById('fileSelectKataF');

    fetch(urlf)
        .then(response => {
            // Memeriksa apakah respons dari permintaan adalah OK (berhasil)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Mengembalikan respons dalam bentuk JSON
            return response.json();
        })
        .then(data => {

            // Mengurutkan data berdasarkan nama file (ascending)
            data.sort((a, b) => a.name.localeCompare(b.name));

            // Menggunakan data yang diterima untuk membuat <option> dalam <select>
            data.forEach(file => {
                const option = document.createElement('option');
                option.value = file.id;
                option.textContent = file.name;
                fileSelect.appendChild(option);
            });
        })
        .catch(error => {
            // Menangani kesalahan jika terjadi
            console.error('Terjadi kesalahan:', error);
        });
}

// Panggil fungsi fetchDataAndPopulateSelect saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyXAbd-cM0ILOVXuuEl9OLla0zj2gkbspthVfMJces3Z08MuI5OB25hZ8eDh7jCaczK/exec'; // Ganti URL_WEB_APP dengan URL web app yang sesuai
    fetchDataAndPopulateSelectF(apiUrl);
});

// Fungsi untuk melakukan permintaan fetch ke URL tertentu dan menampilkan data ke dalam <select>
    function fetchDataAndPopulateSelectF2(urlf2) {
    const fileSelect = document.getElementById('fileSelectKarateF');

    fetch(urlf2)
        .then(response => {
            // Memeriksa apakah respons dari permintaan adalah OK (berhasil)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Mengembalikan respons dalam bentuk JSON
            return response.json();
        })
        .then(data => {

            // Mengurutkan data berdasarkan nama file (ascending)
            data.sort((a, b) => a.name.localeCompare(b.name));

            // Menggunakan data yang diterima untuk membuat <option> dalam <select>
            data.forEach(file => {
                const option = document.createElement('option');
                option.value = file.id;
                option.textContent = file.name;
                fileSelect.appendChild(option);
            });
        })
        .catch(error => {
            // Menangani kesalahan jika terjadi
            console.error('Terjadi kesalahan:', error);
        });
}

// Panggil fungsi fetchDataAndPopulateSelect saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbxGApPvtl5FOUL15MiEG5-ojJ6y0TvGcdydikY3qDlnPA0reTQKHCM-HcfakRgIiRc/exec'; // Ganti URL_WEB_APP dengan URL web app yang sesuai
    fetchDataAndPopulateSelectF2(apiUrl);
});



// Fungsi untuk mengambil data dari web app (Google Apps Script) dan menampilkan dalam tabel di card body
function fetchDataFromWebAppF(spreadsheetId) {
    const url = `https://script.google.com/macros/s/AKfycbx5d4kO3YYmObAyX-2ZTGTsw1LtUhwxRB22R_rgDdlgHtFSUtHK0TGFLVdF5i_7hwk/exec?id=${spreadsheetId}`; // Ganti URL_WEB_APP dengan URL web app yang telah Anda deploy

    // Tampilkan loading spinner saat memuat data
    const loadingSpinner = document.getElementById('loadingSpinnerF');
    loadingSpinner.style.display = 'block';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';

            // Menghapus card yang sebelumnya ditampilkan (jika ada)
            const card = document.querySelector('.data-kata-f');
            if (card) {
                card.style.display = 'none';
            }

            // Membuat tabel HTML dari data
            const table = document.createElement('table');
            table.className = 'table table-hover';

            // Membuat header tabel dari keys (nama kolom) pada objek pertama
            const headers = Object.keys(data[0]);
            const headerRow = table.insertRow();
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });

            // Memasukkan data ke dalam baris tabel
            data.forEach(item => {
                const row = table.insertRow();
                headers.forEach(header => {
                    const cell = row.insertCell();
                    cell.textContent = item[header];
                });
            });

            // Menampilkan tabel dalam card body
            const dataTableContainer = document.getElementById('dataTableContainerF');
            dataTableContainer.innerHTML = ''; // Kosongkan konten sebelumnya
            dataTableContainer.appendChild(table);

            // Tampilkan card dengan tabel
            card.style.display = 'block';
            dataTableContainer.style.display = 'block'; // Tampilkan container tabel
        })
        .catch(error => {
            console.error('Error fetching data from web app:', error);
            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';
        });
}

// Panggil fungsi fetchDataFromWebApp saat <select> dipilih
document.getElementById('fileSelectKataF').addEventListener('change', event => {
    const selectedSpreadsheetId = event.target.value;
    if (selectedSpreadsheetId) {
        fetchDataFromWebAppF(selectedSpreadsheetId);
    }
});



  // Fungsi untuk mengambil data dari web app (Google Apps Script) dan menampilkan dalam tabel di card body
function fetchDataFromWebAppF2(spreadsheetId) {
    const url = `https://script.google.com/macros/s/AKfycbzbpSjRfOQZRyPSBAod-iLGAdtGbguDMZ3Qv5IJ7ONvQp3PmVuADzz_gz3-pt5yjJ91/exec?id=${spreadsheetId}`; // Ganti URL_WEB_APP dengan URL web app yang telah Anda deploy || script di buat di email maclodas

    // Tampilkan loading spinner saat memuat data
    const loadingSpinner = document.getElementById('loadingSpinnerF2');
    loadingSpinner.style.display = 'block';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';

            // Menghapus card yang sebelumnya ditampilkan (jika ada)
            const card = document.querySelector('.data-karate-f');
            if (card) {
                card.style.display = 'none';
            }

            // Membuat tabel HTML dari data
            const table = document.createElement('table');
            table.className = 'table table-hover';

            // Membuat header tabel dari keys (nama kolom) pada objek pertama
            const headers = Object.keys(data[0]);
            const headerRow = table.insertRow();
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                headerRow.appendChild(th);
            });

            // Memasukkan data ke dalam baris tabel
            data.forEach(item => {
                const row = table.insertRow();
                headers.forEach(header => {
                    const cell = row.insertCell();
                    cell.textContent = item[header];
                });
            });

            // Menampilkan tabel dalam card body
            const dataTableContainer = document.getElementById('dataTableContainerF2');
            dataTableContainer.innerHTML = ''; // Kosongkan konten sebelumnya
            dataTableContainer.appendChild(table);

            // Tampilkan card dengan tabel
            card.style.display = 'block';
            dataTableContainer.style.display = 'block'; // Tampilkan container tabel
        })
        .catch(error => {
            console.error('Error fetching data from web app:', error);
            // Sembunyikan loading spinner setelah data diterima
            loadingSpinner.style.display = 'none';
        });
}

// Panggil fungsi fetchDataFromWebApp saat <select> dipilih
document.getElementById('fileSelectKarateF').addEventListener('change', event => {
    const selectedSpreadsheetId = event.target.value;
    if (selectedSpreadsheetId) {
        fetchDataFromWebAppF2(selectedSpreadsheetId);
    }
});


// URL untuk mengambil data
const urlmenu = 'https://script.google.com/macros/s/AKfycbw7Z5x8UnTg3SB2AhkGqAXd-Z63gpFfY1Ls0TuVOaoELv-Y4CdTUui741eJ-oLN095l/exec';

// Fungsi untuk melakukan fetch data dari URL
fetch(urlmenu)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Mengubah response ke JSON
  })
  .then(data => {
    // Data berhasil diambil, sekarang kita dapat menempelkannya ke elemen HTML
    // console.log('Data:', data);

    // Mendapatkan elemen HTML berdasarkan ID
    const header1Element = document.getElementById('header1');
    const select1Element01 = document.getElementById('select01');
    const select1Element1 = document.getElementById('select1');
    const header2Element = document.getElementById('header2');
    const select2Element02 = document.getElementById('select02');
    const select2Element2 = document.getElementById('select2');

    // Menempelkan data ke elemen HTML
    header1Element.innerText = data[0].header1;
    select1Element01.innerText = data[0].label_select1;
    select1Element1.innerText = data[1].label_select1;
    header2Element.innerText = data[0].header2;
    select2Element02.innerText = data[0].label_select2;
    select2Element2.innerText = data[1].label_select2;

    // // Membuat pilihan untuk select1
    // const option1Default = document.createElement('option');
    // option1Default.text = data[0].text_select_default1;
    // select1Element.add(option1Default);

    // const option1 = document.createElement('option');
    // option1.text = data[0].label_select1;
    // select1Element.add(option1);

    // // Membuat pilihan untuk select2
    // const option2Default = document.createElement('option');
    // option2Default.text = data[0].text_select_default2;
    // select2Element.add(option2Default);

    // const option2 = document.createElement('option');
    // option2.text = data[1].label_select2;
    // select2Element.add(option2);
  })
  .catch(error => {
    console.error('Fetch error:', error);
    // Handle error jika fetch tidak berhasil
  });



