'use client';

import { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="block text-white bg-red-600 hover:bg-red-700 font-medium rounded text-sm px-5 py-2.5 text-center fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-[99999] max-sm:rounded-b-none max-md:rounded-b-none shadow"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
        data-aos="zoom-y-out"
        data-aos-delay="450"
      >
        Quer biscoitos?
      </button>
      {showModal ? (
        <Transition show={showModal} as={Fragment}>
          <Dialog onClose={() => setShowModal(false)}>
            <Transition.Child
              id="defaultModal"
              aria-hidden="true"
              className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed md:inset-0 max-md:inset-0 max-md:p-4 max-h-full z-[99999] bg-black bg-opacity-75 transition-opacity"
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ttransition ease-out duration-200"
              leaveFrom="oopacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel>
                <div className=" w-full max-w-2xl max-h-full">
                  <div className=" bg-white rounded shadow ">
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Você aceita nossos cookies?
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                        data-modal-hide="defaultModal"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Fechar modal</span>
                      </button>
                    </div>
                    <div className="p-6 space-y-6 max-md:h-60 max-sm:h-48 overflow-scroll">
                      <p className="text-base leading-relaxed text-gray-500">
                        Este documento possui a finalidade de estabelecer alguns
                        parâmetros para tratamento de dados que incluem, não
                        taxativamente, a recepção, transmissão,
                        compartilhamento, armazenamento, acesso, comunicação,
                        modificação ou transferência das informações coletadas
                        de nossos USUÁRIOS, além de registrar toda e qualquer
                        atividade realizada dentro da plataforma, de acordo com
                        a legislação aplicável.
                      </p>
                      <p className="text-base leading-relaxed text-gray-500">
                        O USUÁRIO confere sua livre e expressa concordância
                        perante este instrumento ao aceitar essa POLÍTICA DE
                        COOKIES e a POLÍTICA DE PRIVACIDADE.
                      </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                      <button
                        data-modal-hide="defaultModal"
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 text-center "
                        onClick={() => setShowModal(false)}
                      >
                        Eu aceito
                      </button>
                      <button
                        data-modal-hide="defaultModal"
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                        onClick={() => setShowModal(false)}
                      >
                        Recusar
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      ) : null}
    </>
  );
}
