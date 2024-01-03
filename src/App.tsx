import { useNavigate } from "react-router-dom";
import fbLogo from "./assets/fb.svg";
import googleLogo from "./assets/google.svg";
import olxLogo from "./assets/olx.svg";
import {  useState } from "react";

function App() {
  const [inputEmail, setInputEmail] = useState("");

  const navigate = useNavigate();

  function handleClick() {
    localStorage.setItem("email", inputEmail);
    navigate("/acesso");
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  return (
    <div className="w-full h-[100vh] bg-[#f9f9f9] flex justify-center">
      <div className="flex flex-col justify-center max-w-[466px] my-16 mx-auto">
        <div className="bg-white shadow-[rgba(153,153,153,0.2)_0px_2px_4px_0px] pt-8 pb-6 px-14 rounded-t ">
          <div className="flex flex-col items-center mb-2">
            <a href="https://olx.com.br" target="_blank">
              <img
                src={olxLogo}
                width={64}
                height={64}
                className="min-w-[12px] min-h-[12px] "
                alt="OLX logo"
              />
            </a>
            <span className="text-[#1a1d23]">Acesse a sua conta</span>
          </div>

          <div className="flex flex-col mb-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-[#4a4a4a] font-bold text-base"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg px-4 py-3 mt-2 border border-gray-300 bg-inherit"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                onClick={handleClick}
                className="bg-[#f28000] hover:bg-[#df7400] hover:border-[#df7400] rounded-[500px] px-6 py-2 text-white w-full transition-all ease-in-out duration-200"
              >
                Continuar
              </button>
          </div>

          <div>
            <div className="divider text-[#898989] before:bg-[#cfd4dd] before:h-[1px] after:h-[1px] after:bg-[#cfd4dd]">
              Ou conecte com
            </div>
            <div className="flex flex-row justify-center">
              <span onClick={() => navigate("/acesso")} className="cursor-pointer text-white p-4 flex items-center justify-center rounded-full bg-[#4285f4] mr-8">
                <img
                  src={googleLogo}
                  width={24}
                  height={24}
                  alt="Google logo"
                />
              </span>
              <span onClick={() => navigate("/acesso")} className="cursor-pointer text-white p-4 flex items-center justify-center rounded-full bg-[#3a5998]">
                <img src={fbLogo} width={24} height={24} alt="Facebook logo" />
              </span>
            </div>

            <div className="divider before:bg-[#cfd4dd] before:h-[1px] after:h-[1px] after:bg-[#cfd4dd]"></div>

            <div className="flex items-center w-full justify-center">
              <span>Não tem uma conta? </span>
              <a href="" className="ml-1 text-[#6e0ad6]">Cadastre-se</a>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <div className="group h-9 w-full rounded-b bg-[#f5f6f7] hover:bg-[#f7f1fd] shadow-[rgba(153,153,153,0.2)_0px_2px_4px_0px] flex items-center justify-center ">
            <span className="text-sm group-hover:text-[#6e0ad6] group-hover:transition-all ease-in-out duration-200">
              Preciso de ajuda
            </span>
            <svg width="16px" height="16px" viewBox="0 0 24 24">
              <path
                fill="#4A4A4A"
                d="M8.46966991,17.4696699 C8.1767767,17.7625631 8.1767767,18.2374369 8.46966991,18.5303301 C8.76256313,18.8232233 9.23743687,18.8232233 9.53033009,18.5303301 L15.5303301,12.5303301 C15.8232233,12.2374369 15.8232233,11.7625631 15.5303301,11.4696699 L9.53033009,5.46966991 C9.23743687,5.1767767 8.76256313,5.1767767 8.46966991,5.46966991 C8.1767767,5.76256313 8.1767767,6.23743687 8.46966991,6.53033009 L13.9393398,12 L8.46966991,17.4696699 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-6 flex">
          <span className="block leading-[1.32] text-xs text-[#3c4453]">
            Ao continuar, você concorda com os <a className="cursor-pointer text-[#6e0ad6]" href="https://ajuda.olx.com.br/s/article/termos-e-condicoes-de-uso" target="_blank">Termos de Uso</a> e a <a className="cursor-pointer text-[#6e0ad6]" href="https://ajuda.olx.com.br/s/article/politica-de-privacidade" target="_blank">Política de
            Privacidade</a> da OLX e seus parceiros, e em receber comunicações da
            OLX.
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
