<template>
  <div id="home" class="relative overflow-hidden bg-primary">
    <div class="container">
      <div class=" " data-wow-delay=".2s">
<!--        <%= render partial: 'layouts/notice' %>-->
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4">
            <div
                class="items-center justify-between overflow-hidden lg:flex">
              <div class="w-full ">
                <h1 class="absolute text-6xl text-white w-60  opacity-10 font-GTWalsheimPro "> Software Engineer </h1>
                <div class=" mt-12  px-8 ">
                  <h3 class="text-2xl text-white font-GTWalsheimPro"> Hello, it's me</h3>
                  <div>
                    <h1 class="text-8xl text-white font-GTWalsheimPro">Usama Mirza<strong  style=" color: rgb(95,153,255);">.</strong> </h1>
                    <p class=" text-white text-justify font-normal font-GTWalsheimProThin" >An enthusiastic problem solver. Primarily a Computer Scientist and have experience of about 2 years in
                      Software Development. I have been working in the software industry providing frontend and backend
                      development.</p>
                  </div>
                </div>

              </div>
              <div class="hidden md:block">
<!--                <%= image_tag('no_bg_dp.png') %>-->
                <ul class="mb-12 flex flex-wrap items-center justify-center">
                  <li>
<!--                    <%= link_to "Star on Github", "https://github.com/usamamirza1234",class:"flex items-center py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:opacity-70 sm:px-10" %>-->
                  </li>
                </ul>
              </div>
An enthusiastic problem solver. Primarily a Computer Scientist and have experience of about 2 years in Software Development. I have been working in the software industry providing frontend and backend development.

              <!--            w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHero"
}
</script>