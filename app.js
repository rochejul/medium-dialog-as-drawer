async function setup() {
  const buttonDialogElement = document.querySelector('button');
  const drawerDialogElement = document.querySelector('dialog');

  buttonDialogElement.addEventListener('click', () => {
    if (document.querySelector('dialog[open]:modal')) {
      return;
    }

    drawerDialogElement.show();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', async () => {
    await setup();
  });
} else {
  await setup();
}
