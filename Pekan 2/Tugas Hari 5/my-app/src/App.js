import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
                <h1>Form Pembelian Buah</h1>
          <form action="">
            <table>
                  <tr><td>Nama Pelanggan</td>
                  <td><input type="text" name="" id=""/></td></tr>
                  <tr><td>Daftar Item</td>
                  <td><input type="checkbox" name="buah" id=""/> <label for="">Semangka</label><br/>
                  <input type="checkbox" name="buah" id=""/> <label for="">Jeruk</label><br/>
                  <input type="checkbox" name="buah" id=""/> <label for="">Nanas</label><br/>
                  <input type="checkbox" name="buah" id=""/> <label for="">Salak</label><br/>
                  <input type="checkbox" name="buah" id=""/> <label for="">Anggur</label></td></tr>
            </table>
            <input type="submit" value="Kirim"/>
          </form>
    </div>
  );
}

export default App;