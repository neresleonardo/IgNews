import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

 export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    function handleSubscribe() {

    }
  
  return(
      <button onClick="handleSubscribe" type="button" className={styles.subscribeButton}>
      Subscribe now
      </button>
    );
 }