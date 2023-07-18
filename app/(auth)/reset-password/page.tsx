export const metadata = {
  title: 'Restaurar senha',
  description: 'Page description',
};

export default function ResetPassword() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Vamos colocá-lo de volta em sua conta</h1>
            <p className="text-xl text-gray-600">
              Digite o endereço de e-mail que você usou quando se inscreveu no
              seu conta e enviaremos por e-mail um link para redefinir sua
              senha.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    E-mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Insira seu endereço de e-mail"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-red-600 hover:bg-red-700 w-full">
                    Enviar link de restauração
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
