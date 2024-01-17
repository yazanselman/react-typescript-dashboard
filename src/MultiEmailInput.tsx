import { log } from 'console';
import * as React from 'react';
import { ReactMultiEmail,isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';

interface Props {}

function BasicExample(props: Props) {
  const [focused, setFocused] = React.useState(false);

  const [emails, setEmails] = React.useState<string[]>([]);

  const handleEmailChange = (_emails:string[]) => {
    // E-posta validasyonu yapmadan doğrudan güncelle
    setEmails(_emails);
  };

  const handleKeyDown = (event:any) => {
    console.log(event.target.value.trim())
    // Enter tuşuna basıldığında e-posta ekleyin
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      setEmails((prevEmails) => [...prevEmails, event.target.value.trim()]);
      console.log(emails)
      event.target.value = ''; // Input'u temizle
    }
  };
  return (
    <ReactMultiEmail
    placeholder='Input your email'
    emails={emails}
    onChange={handleEmailChange}
    onKeyDown={handleKeyDown}
    autoFocus={true}
    disableOnBlurValidation
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    getLabel={(email, index, removeEmail) => {
        console.log(emails)
      return (
        <div data-tag key={index}>
          <div data-tag-item>{email}</div>
          <span data-tag-handle onClick={() => removeEmail(index)}>
            ×
          </span>
        </div>
      );
    }}
    />
  );
}

export default BasicExample;