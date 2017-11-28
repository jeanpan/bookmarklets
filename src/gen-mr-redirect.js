(function(doc) {
  const location = doc.location.href;
  const paths = location.split('/');
  const length = paths.length;
  const mr = paths[length - 1], app = paths[length - 3];
  const html = `<html>
    <head>
      <title>Redirect to ${app} MR #${mr}</title>
      <meta http-equiv="refresh" content="1; url=${location}" />
    </head>
      <body>Redirect to ${app} MR #${mr}</body>
    </html>`;
  const textArea = doc.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '1em';
  textArea.style.height = '1em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = html;
  doc.body.appendChild(textArea);
  textArea.select();
  try {
    if (doc.execCommand('copy')) {
      alert('Copy successfully!');
    } else {
      alert('Oops, unable to copy.');
    }
  } catch (err) {
    alert('Oops, unable to copy.');
  }
  doc.body.removeChild(textArea);
})(document);