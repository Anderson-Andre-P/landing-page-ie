'use client';

import { useState } from 'react';

export default function Accordion() {
  return (
    <>
      <div className="">
        <div className="bg-white">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="h2 mb-2">Perguntas frequentes</h2>
            <p className="text-xl text-gray-600 mb-4">
              Perguntas frequentes sobre a IE Tecnologia
            </p>
            <div className="">
              <details className="">
                <summary className="flex items-center justify-between w-full p-5 font-semibold text-left text-gray-900 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-200">
                  O que significa IE Tecnologia?
                </summary>
                <p className="p-5 border border-b-0 border-gray-200 text-gray-600">
                  Significa...
                </p>
              </details>
              <details className="">
                <summary className="flex items-center justify-between w-full p-5 font-semibold text-left text-gray-900 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  hover:bg-gray-200">
                  Onde se localiza a sede da empresa?
                </summary>
                <p className="p-5 border border-b-0 border-gray-200 text-gray-600">
                  Localiza...
                </p>
              </details>
              <details className="">
                <summary className="flex items-center justify-between w-full p-5 font-semibold text-left text-gray-900 border border-b-1 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-200">
                  Tem alguma garantia?
                </summary>
                <p className="p-5 border border-b-1 border-gray-200 rounded-b-xl text-gray-600">
                  Garantia...
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
