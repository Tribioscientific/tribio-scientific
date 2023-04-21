import Link from "next/link";

const MoreDetailsPdf =  () => {

  return ( 
  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
        <a href="" class="text-2xl font-bold text-primary">
         Get More Details.
            </a>
          <p class="max-w-xl text-lg">
          Fill the form and download pdf.
          </p>
  
          <div class="mt-8">
            <a href="" class="text-2xl font-bold text-primary">
             Or Mail Us
            </a>
  
            <address class="mt-2 not-italic">
            info@tribioscientific.com
            </address>
          </div>
        </div>
  
        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" class="space-y-4">
            <div>
              <label class="sr-only" for="name">Company Name</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Company Name"
                type="text"
                id="name"
                required
              />
            </div>
  
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Contact Name</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Contact Name"
                  type="text"
                  id="email"
                  required
                />
              </div>
  
              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  required
                />
              </div>
  
              <div>
                <label class="sr-only" for="phone">City/Province</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="City/Province"
                  type="text"
                  id="phone"
                  required
                />
              </div>
            </div>
  
            {/* <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <input
                  class="peer sr-only"
                  id="option1"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />
  
                <label
                  for="option1"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Option 1 </span>
                </label>
              </div>
  
              <div>
                <input
                  class="peer sr-only"
                  id="option2"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />
  
                <label
                  for="option2"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Option 2 </span>
                </label>
              </div>
  
              <div>
                <input
                  class="peer sr-only"
                  id="option3"
                  type="radio"
                  tabindex="-1"
                  name="option"
                />
  
                <label
                  for="option3"
                  class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                  tabindex="0"
                >
                  <span class="text-sm font-medium"> Option 3 </span>
                </label>
              </div>
            </div>
   */}
    <div>
              <label class="sr-only" for="name">Title</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Title"
                type="text"
                id="name"
                required
              />
            </div>
            <div>
              <label class="sr-only" for="message">Message</label>
  
              <textarea
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Tell us about your company...."
                rows="8"
                id="message"
                required
              ></textarea>
            </div>
  
            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg btn btn-primary px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry/Download
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default MoreDetailsPdf;
