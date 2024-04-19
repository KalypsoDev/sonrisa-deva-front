import React from 'react'

const LoginFormAdmin = () => {
    return (
        <form className="max-w-4xl mx-auto rounded-lg p-6 px-10 bg-darkBlue shadow-2xl sm:rounded-xl border-gray-600 my-7 flex flex-col items-center">
            <h1 className="text-center text-2xl font-montserratBold text-white rounded-lg p-3">ACCEDE COMO ADMINISTRADOR</h1>
            <hr className="w-full my-3 border-gray-300" />
            <div className="flex flex-col sm:flex-row w-full font-montserratRegular text-white">
                <div className="flex flex-col w-full sm:w-2/3 justify-center">

                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    {/* <div class="username flex border rounded text-gray-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        <input class="outline-none px-2 h-full py-2 text-lg" type="text" placeholder="username" />
                    </div>

                    <div class="password flex border rounded text-gray-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 mx-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                        <input class="outline-none px-2 h-full py-2 text-lg" type="password" placeholder="password" />
                    </div> */}

                </div>
            </div>
        <div>
                
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Iniciar sesión</button>
            
            </div>
        </form>
    )
}

export default LoginFormAdmin