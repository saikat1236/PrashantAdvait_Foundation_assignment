fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3").then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata['courses']);
    let data=completedata.relatedContent[completedata.relatedContent.length-1];
   console.log(completedata)
//    console.log(completedata.courses)
    let data1=""
    completedata.courses.map(value1=>(
        data1+=`
    <div class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow">
        <div class="flex flex-col space-y-2">
            <div class="self-start pb-2">
                <div id="part-pointer" class="svelte-a2w579">
                    <span class="font-hi">कोर्स ${value1.series.order.seq}</span> 
                </div>
            </div>
        <div class="flex w-full flex-col text-left">
            <div>
                <div class="text-lg font-medium leading-normal text-gray-title">

                    <span class="font-hi">${value1.title}</span>
                </div>
                <div class="text-sm leading-normal text-gray-subtitle laptop:text-base">

                    <span class="font-hi">${value1.subtitle}</span>
                </div>
                <div class="pt-1 text-xs text-gray-subtitle laptop:text-sm">

                    <span class="font-en">${value1.courseHours} hours</span>
                </div>
                <div class="pt-1 text-xs text-gray-subtitle laptop:text-sm">

                    <span class="font-en">Contribution: ${value1.amount}₹</span>
                </div>
            </div>

            <div class="mt-2 flex flex-wrap text-xs">
                <div class="mr-1">
                    <div
                        class="rounded py-px px-1.5 text-xs text-slate-700   bg-blue-background">

                        <span class="font-en">${value1.language}</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="inline-flex items-center space-x-3 text-xs font-medium">
                <div
                    class="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-borderless btn-base svelte-5g42hi">

                    <span class="font-en">ADD TO CART</span>
                </div>
                <div class="self-stretch py-2">
                    <div class="h-full w-px bg-gray-separator"></div>
                </div>
                <div
                    class="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-borderless btn-base svelte-5g42hi">

                    <span class="font-en">ENROL</span>
                </div>
            </div>
        </div>
    </div>
        <div class="pt-2 group-hover:invisible">
		    <div class=" h-[0.5px] w-full bg-gray-separator">
            </div>
	    </div>
    </div>
  
`
    ));
    document.getElementById("info1").innerHTML=data1
    let data2=""
    for (let data in completedata.details) {
        data2=`<div class="flex flex-col tab:flex-row tab:items-start">
        <div class="w-full shrink-0 tab:w-2/5">
        <div class="aspect-[16/9] w-full">
            <div class="relative h-full w-full overflow-hidden rounded"><img
                    class="h-full w-full object-cover"
                    src="`+completedata.details["thumbnail"].domain+"/"+completedata.details["thumbnail"].basePath+"/"+completedata.details["thumbnail"].qualities[0]+"/"+completedata.details["thumbnail"].key+`"
                    alt="Thumbnail">
                <div
                    class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                </div>
                <img class="absolute right-1 bottom-1 object-contain logo-height-lg svelte-cz7db6"
                    src="images/ic_apsignature_hindi.png" alt="AP Name Logo">
            </div>
        </div>
        <div class="hidden pt-4 tab:block">
            <div class="flex flex-col items-center tab:items-start">
                <div class="pb-3 text-sm font-medium text-gray-title tab:pb-1">

                    <span class="font-en">Share this series</span><span
                        class="invisible tab:visible">:</span>
                </div>
                <div class="w-full px-8 tab:px-0">
                    <div class="flex w-full justify-center space-x-4 tab:justify-start">
                        <div class="share-icon svelte-r6rw6p"><a
                                href="https://wa.me/?text=undefined%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3"
                                data-action="share/whatsapp/share" target="_blank"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="31"
                                    height="31" viewBox="0 0 31 31" class="fill-current">
                                    <path fill-rule="evenodd"
                                        d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm.98 4.577a9.708 9.708 0 0 0-8.417 14.5L6.71 24.615l5.1-1.413.292.143a9.708 9.708 0 0 0 13.84-8.745c0-5.284-4.178-9.523-9.462-9.523Zm.026 1.807c4.178 0 7.742 3.256 7.742 7.803 0 4.424-3.564 8.049-7.926 8.11-2.52 0-4.424-1.352-4.424-1.352l-3.01.799.737-2.95c-.083-.131-1.229-1.986-1.229-4.3 0-4.424 3.625-8.11 8.11-8.11Zm-2.944 3.413-.092.002h-.492l-.052.003c-.132.015-.347.09-.562.304-1.352 1.352-.799 3.257.184 4.486.184.245 1.413 2.457 4.055 3.624 1.966.86 2.396.738 2.95.615.675-.062 1.35-.615 1.658-1.167.061-.185.369-.984.123-1.106l-2.15-1.045-.062-.038c-.164-.095-.328-.119-.491.1l-.738.983-.066.043c-.15.092-.272.126-.487.018-.921-.491-2.212-1.044-3.317-2.888-.062-.245.061-.368.184-.491l.553-.86.042-.053c.063-.105.01-.21-.042-.316l-.737-1.782-.047-.111c-.138-.303-.276-.324-.414-.321Z">
                                    </path>
                                </svg></a></div>
                        <div class="share-icon svelte-r6rw6p"><a
                                href="http://twitter.com/share?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fcourses%2Fseries%2Fcourse-series-eeb9d3&amp;text=%0Aundefined&amp;hashtags=AcharyaPrashant,courses,wisdom,spirituality"
                                target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="31" height="31" viewBox="0 0 31 31"
                                    class="fill-current">
                                    <path fill-rule="evenodd"
                                        d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm4.223 8.2c-2.17 0-3.93 1.667-3.93 3.724 0 .273.03.54.09.796-3.221-.198-6.078-1.66-8.025-3.865a3.468 3.468 0 0 0-.541 1.86c0 1.31.733 2.457 1.83 3.095a3.974 3.974 0 0 1-1.83-.47v.083c0 1.81 1.398 3.309 3.227 3.583a4.022 4.022 0 0 1-1.873.118c.493 1.464 1.94 2.525 3.684 2.525a8.351 8.351 0 0 1-4.912 1.573c-.32 0-.634-.017-.943-.051a11.5 11.5 0 0 0 6.048 1.696c6.133 0 11.105-4.71 11.105-10.52v-.158l.001-.105v-.242a6.335 6.335 0 0 0 1.913-1.896 6.898 6.898 0 0 1-2.202.572 3.55 3.55 0 0 0 1.673-2.033 6.399 6.399 0 0 1-2.44.898A4.024 4.024 0 0 0 19.722 8.7Z">
                                    </path>
                                </svg></a></div>
                        <div class="share-icon svelte-r6rw6p"></div>
                        <div class="share-icon svelte-r6rw6p"><a
                                href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/courses/series/course-series-eeb9d3"
                                target="_blank"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="31" height="31" viewBox="0 0 31 31"
                                    class="fill-current">
                                    <path fill-rule="evenodd"
                                        d="M15.5.5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Zm-4.868 11.036h-3.59V23.5h3.59V11.536Zm9.93-.335c-1.579 0-2.775.574-3.421 1.46v-1.125h-3.59V23.5h3.59v-6.533c0-1.699.91-2.464 2.225-2.464 1.149 0 2.082.694 2.082 2.177v6.82h3.59v-7.346c0-3.23-2.058-4.953-4.475-4.953ZM8.839 6.175A2.176 2.176 0 0 0 6.684 8.33c0 1.173.981 2.154 2.154 2.154a2.176 2.176 0 0 0 2.153-2.154 2.176 2.176 0 0 0-2.153-2.154Z">
                                    </path>
                                </svg></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="flex flex-col self-stretch pt-4 text-sm tab:pl-4 tab:pt-0 laptop:text-lg">
            <div class="text-lg font-medium text-gray-title laptop:text-xl">

                <span class="font-hi">`+completedata.details["subtitle"]+`</span>
            </div>

            <div class="text-justify text-base text-gray-subtitle tab:pr-4">
                <div class="hidden tab:block">

                    <span class="font-hi">`+completedata.details["description"]+`</span>
                </div>
                <div class="tab:hidden">

                    <span class="font-hi">`+completedata.details["description"]+`</span>
                    <span class="cursor-pointer text-brand-600 hover:text-brand-800">
                </div>
            </div>
        </div>`
      }
    document.getElementById("info2").innerHTML=data2
    let data3=""
    completedata.relatedContent.pop();
    completedata.relatedContent.map((val)=>{
        data3+=`<div class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow">
        <div class="flex flex-row items-start">
            <div class="flex w-1/3 flex-shrink-0 flex-col items-start space-y-1">
                <div class="w-full">
                    <div id="stacked-images-wrapper"
                        class="relative aspect-[16/9] w-full overflow-hidden svelte-1csyku9">
                        <div class="absolute inset-0 mx-2 border border-t border-white">
                            <div class="relative h-full w-full overflow-hidden rounded"><img
                                    class="h-full w-full object-cover"
                                    src="`+val["thumbnail"].domain+"/"+val["thumbnail"].basePath+"/"+val["thumbnail"].qualities[0]+"/"+val["thumbnail"].key+`"
                                    alt="Thumbnail">
                                <div
                                    class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                                </div>
                                <img class="absolute right-1 bottom-1 object-contain logo-height-base svelte-cz7db6"
                                    src="images/ic_apsignature_english.png" alt="AP Name Logo">
                            </div>
                        </div>

                        <div class="absolute inset-0 top-1 mx-1 border border-t border-white">
                            <div class="relative h-full w-full overflow-hidden rounded"><img
                                    class="h-full w-full object-cover"
                                    src="`+val["thumbnail"].domain+"/"+val["thumbnail"].basePath+"/"+val["thumbnail"].qualities[0]+"/"+val["thumbnail"].key+`"
                                    alt="Thumbnail">
                                <div
                                    class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                                </div>
                                <img class="absolute right-1 bottom-1 object-contain logo-height-base svelte-cz7db6"
                                    src="images/ic_apsignature_english.png" alt="AP Name Logo">
                            </div>
                        </div>

                        <div class="absolute inset-0 top-2 border border-t border-white">
                            <div class="relative h-full w-full overflow-hidden rounded"><img
                                    class="h-full w-full object-cover"
                                    src="`+val["thumbnail"].domain+"/"+val["thumbnail"].basePath+"/"+val["thumbnail"].qualities[0]+"/"+val["thumbnail"].key+`"
                                    alt="Thumbnail">
                                <div
                                    class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
                                </div>
                                <img class="absolute right-1 bottom-1 object-contain logo-height-base svelte-cz7db6"
                                    src="images/ic_apsignature_english.png" alt="AP Name Logo">
                            </div>
                        </div>
                    </div>

                </div>
                <div class="rounded py-px px-1.5 text-xs text-slate-700  bg-green-background">

                    <span class="font-en">Series</span>
                </div>
            </div>

            <div class="ml-4 flex flex-shrink flex-col">
                <div class="text-lg font-medium text-gray-title">

                    <span class="font-en">${val.title}</span>
                </div>
                <div class="text-sm leading-normal text-gray-subtitle laptop:text-base">

                    <span class="font-en">${val.subtitle}</span>
                </div>
                <div class="text-sm text-gray-subtitle">


                <span class="font-en">${val.coursesCount}</span> 
                </div>
            </div>
        </div>
        <div class="pt-2 group-hover:invisible tab:pr-4">
            <div class="h-[0.5px] w-full bg-gray-separator"></div>
        </div>
    </div>`
}); 
document.getElementById("series").innerHTML=data3
// console.log(completedata2)
let data4=""
console.log(data["thumbnail"].domain+data["thumbnail"].basePath+data["thumbnail"].qualities[0]+data["thumbnail"].key)
for (let datas in data) {
    data4=`
    <div class="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow">
							 
								<div  class="flex flex-row items-start space-x-4">
									<div class="w-1/3 flex-shrink-0">
										<div class="relative h-full w-full overflow-hidden rounded"><img
												class="h-full w-full object-cover"
												src="`+data["thumbnail"].domain+"/"+data["thumbnail"].basePath+"/"+data["thumbnail"].qualities[0]+"/"+data["thumbnail"].key+`"
												alt="Thumbnail">
											<div
												class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white">
											</div>
											<img class="absolute right-1 bottom-1 object-contain logo-height-base svelte-cz7db6"
												src="images/ic_apsignature_english.png" alt="AP Name Logo">
										</div>
									</div>

									<div class="flex flex-col space-y-2">
										<div class="flex w-full flex-col text-left">
											<div>
												<div class="text-lg font-medium leading-normal text-gray-title">

													<span class="font-en">`+data["title"]+`</span>
												</div>
												<div class="text-sm leading-normal text-gray-subtitle laptop:text-base">

													<span class="font-en">`+data["subtitle"]+`</span>
												</div>
												<div class="pt-1 text-xs text-gray-subtitle laptop:text-sm">

													<span class="font-en">`+data["courseHours"]+" hours"+`</span>
												</div>
												<div class="pt-1 text-xs text-gray-subtitle laptop:text-sm">

													<span class="font-en">Contribution: ₹`+data["amount"]+`</span>
												</div>
											</div>

											<div class="mt-2 flex flex-wrap text-xs">
												<div class="mr-1">
													<div
														class="rounded py-px px-1.5 text-xs text-slate-700   bg-blue-background">

														<span class="font-en">`+data["language"]+`</span>
													</div>
												</div>
											</div>
										</div>

										<div>
											<div class="inline-flex items-center space-x-3 text-xs font-medium">
												<div
													class="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-borderless btn-base svelte-5g42hi">

													<span class="font-en">ADD TO CART</span>
												</div>
												<div class="self-stretch py-2">
													<div class="h-full w-px bg-gray-separator"></div>
												</div>
												<div
													class="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-borderless btn-base svelte-5g42hi">

													<span class="font-en">ENROL</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="pt-2 group-hover:invisible tab:pr-4">
									<div class="h-[0.5px] w-full bg-gray-separator"></div>
								</div>
							</div>  
`
}; 
document.getElementById("series2").innerHTML=data4

}).catch((err) =>{
    console.log(err);
});



fetch("https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english").then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let faq=""
    completedata.map((val)=>{
        faq+=` <div>
        <div class="flex items-center justify-between tab:cursor-pointer">
            <div class="pr-2 font-semibold text-gray-subtitle">

                <span class="font-hi">${val.question}</span>
            </div>
            <div class="h-3 w-3 text-slate-400 hover:text-slate-800"><svg
                    xmlns="http://www.w3.org/2000/svg" width="11" height="7"
                    viewBox="0 0 11 7" class="fill-current">
                    <path fill-rule="evenodd"
                        d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z">
                    </path>
                </svg></div>
        </div>

    </div>

    <div class="my-4 h-[0.5px] justify-start bg-gray-separator"></div>
    <div>`
    });
    document.getElementById("faq").innerHTML=faq
}).catch((err) =>{
    console.log(err);
});