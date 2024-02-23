import React from 'react';

const Detay = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img src="https://picsum.photos/200/300" alt="Resim" className="img-fluid" />
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div>
            <div className="mb-4">
              <h3>3. Detay Sayfası</h3>
            </div>
            <p>Doğanın güzelliğini keşfetmek için en iyi yol, doğa yürüyüşlerine çıkmaktır.
               Doğa, ruhunuzu dinlendirir ve zihninizi yeniler.
               Dağların zirvesine tırmanmak, doğanın etkileyici manzarasını görmek için harika bir yoldur.
               Bir ormanda yürümek, doğanın seslerini dinlemek ve kuşları gözlemlemek rahatlatıcı bir deneyimdir.
               Bir nehri izlemek ve suyun akışını izlemek, doğanın sakinleştirici gücünü hissetmenin harika bir yoludur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Detay;
