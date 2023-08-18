import React from "react";

import styles from "./app_info.module.css";
import { Icon } from "../Icon";

export const AppInfo = () => {
  return (
    <section className={styles.app_info}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2>
            <Icon i="preview" type="outlined" />
            <span>Visualize Seu Pacote Em Tempo Real!</span>
            <Icon i="timer" type="outlined" />
          </h2>
          <p>
            Bem-vindo ao <strong>Tracking System</strong>, a evolução no
            rastreamento de objetos dos correios.
          </p>
        </div>

        <div className={styles.particulars}>
          <div className={styles.features}>
            <h3>Características</h3>
            <ul>
              <li>
                <Icon i="public" />
                <span>
                  Rastreamento <strong>Visual</strong> em Mapa
                </span>
              </li>
              <li>
                <Icon i="toc" />
                <span>
                  Tabela <strong>Detalhada</strong> de Atualizações
                </span>
              </li>
              <li>
                <Icon i="devices" />
                <span>
                  Interface <strong>Amigável</strong>
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.how_it_works}>
            <h3>Como Funciona?</h3>
            <ol>
              <li>
                <Icon i="code" />
                <span>
                  Insira o <strong>Código</strong>
                </span>
              </li>
              <li>
                <Icon i="map" type="outlined" />
                <span>
                  Visualize no <strong>Mapa</strong>
                </span>
              </li>
              <li>
                <Icon i="info" type="outlined" />
                <span>
                  Confira os <strong>Detalhes</strong>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
