 const Contact = () => {

return (

<>
   
        <div className="overlay"></div>
      <div className="container">
        <div className="row slider-text justify-content-center align-items-center">

          <div className="col-md-7 col-sm-12 text-center ftco-animate">
              <h1 className="mb-3 mt-5 bread">Свържете се с нас</h1>
              <p className="breadcrumbs">Вашето мнение е <b>важно</b> за нас</p>
          </div>

        </div>
      </div>
    


  <section className="ftco-section contact-section">
    <div className="container mt-5">
      <div className="row block-9">
                  <div className="col-md-4 contact-info ftco-animate">
                      <div className="row">
                          <div className="col-md-12 mb-4">
                <h2 className="h4">Информация за контакт</h2>
              </div>
              <div className="col-md-12 mb-3">
                <p><span>Адрес:</span> Варна,бул. Сливница 14 (срещу хотел "Черно море") </p>
              </div>
              <div className="col-md-12 mb-3">
                <p><span>Телефон:</span> <a href="tel://+359878585852">+359 87 858 5852</a></p>
              </div>
              <div className="col-md-12 mb-3">
                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@pizzabonna.com</a></p>
              </div>
              {/* <div className="col-md-12 mb-3">
                <p><span>Website:</span> <a href="#">yoursite.com</a></p>
              </div> */}
                      </div>
                  </div>
                  <div className="col-md-1"></div>
        <div className="col-md-6 ftco-animate">
          <form action="#" className="contact-form">
              <div className="row">
                  <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Име"/>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email"/>
                  </div>
                  </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Относно"/>
            </div>
            <div className="form-group">
              <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Описание"></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Изпрати" className="btn btn-primary py-3 px-5"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* <div id="map"></div> */}
  </>
)


}
export default Contact