import { useYunoSecureFields } from './use-yuno-secure-fields';

export const YunoCreditCard = () => {
  const sessionId = '3d9a7bdf-122d-4f0d-9031-62a0beb51d63'
  const { error } = useYunoSecureFields(sessionId)

  return (
    <div style={{ flexDirection: "column", width: "600px" }}>
        <div id="pan" />
        <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ width: '300px' }} id="expiration" />
            <div style={{ width: '300px' }} id="cvv" />
        </div>
        <p style={{ color: "red", fontWeight: 400, fontSize: "12px", margin: "3px 14px 0 14px" }}>
            {error && 'Dados de cartão inválidos'}
        </p>
    </div>
  );
}
