!<template lang="">
  <div>
    <div class="container">
      <div class="row">
        <div class="logo">
          <img src="../assets/IGOR.DEV.png" alt="Logo do site igor.dev">
        </div>
        <div class="nav">
          <ul>
            <li><a href="#home"><font-awesome-icon class="icons" icon="fa-house" />Home</a></li>
            <li><a href="#about"><font-awesome-icon class="icons" icon="fa-address-card" />Sobre</a></li>
            <li><a href="#projects"><font-awesome-icon class="icons" icon="fa-bars-progress" />Projetos</a></li>
            <li><a href="#exp"><font-awesome-icon class="icons" icon="fa-vial" />Experiencia</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>



export default {
  name: "HeaderComponent",
  
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }


  @media (max-width: 550px) {

  .row{
    display: flex;
    width: 100%;
    height: 4rem;
    align-items: center;
    justify-content: space-around;
    background-color: #2C3E50;
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  .row .logo{
    display: none;
  }

  .row .nav{
    height: 3rem;
    width: 100%;
  }

  .row .nav ul{
    display: flex;
    gap: 1rem;
    height: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .row .nav ul li{
    padding: 0.6rem;
    width: 100%;
    text-align: center;
  }

  .row .nav ul li a{
    color: #FFFFFF;
    font-size: 0.7rem;
    border-radius: 8px;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .row .nav ul li a .icons{
    font-size: 1.2rem;
    margin-bottom: 4px;
    transition: 0.4s ease;
  }

  .row .nav ul li a:hover .icons{
    color: #FFFFFF;
    font-size: 1.6rem;
  }

}

  @media (min-width: 550px) {

   .row{
    display: flex;
    width: 100%;
    height: 4rem;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    background-color: #2C3E50;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
  }
  .row .logo{
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center;
  }

  .row .logo img{
    margin-left: 1rem;
    max-width: 50%;
  }

  .row .nav{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  }

  .row .nav ul{
    display: flex;
    align-items: center;
  }

  .row .nav ul li{
    width: 100%;
    display: grid;
    margin-right: 1rem;
  }

  .row .nav ul li a {
  font-size: 0.8rem;
  color: #FFFFFF;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  transition: 0.3s ease;
}


.row .nav ul li a:hover {
  color: #FFFFFF;
  font-size: 1rem;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.15);
}

.row .nav ul li .icons{
  display: none;
}


}




</style>