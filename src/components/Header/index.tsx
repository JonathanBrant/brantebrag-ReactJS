import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.scss'

export function Header () {
    const currentDate = format(new Date (), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return(
        <header className={styles.headerContainer}>
            <nav>
                <ul>
                    <li>
                        <a href="">Início</a>
                    </li>
                    <li>
                        <a href="">Serviços</a>
                    </li>
                    <li>
                        <a href="">Sobre nós</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </nav>
            <aside>
                <span>{currentDate}</span>
            </aside>
        </header>
    )

}
