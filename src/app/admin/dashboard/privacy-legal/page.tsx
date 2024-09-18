export default function PrivacyLegal() {
    return (
      <>
        <h1 className="text-3xl font-bold my-6 text-center text-white">Privacy and Legal</h1>
      <div className="min-h-screen flex flex-col items-center bg-[#021526] text-white py-10 px-4">
        {/* Create or Update Blog Section */}
        <section className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="content" className="block text-sm font-semibold mb-2">Enter the privacy policy and legal</label>
              <textarea
                id="content"
                rows={14}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                required
              />
            </div>


            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-blue-500 text-white py-3 rounded-lg font-bold transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      </>
    );
  }
  