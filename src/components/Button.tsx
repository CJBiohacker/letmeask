import { ButtonHTMLAttributes } from "react";   // Importação do Template de Atributos de Botão para HTML direto do REACT.

import '../style/button.scss';  // Importação da Estilização SASS CSS para o Botão de 'Entrar na Sala'

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: buttonProps) {
    return (
        <button className="button" {...props} />
    )
}