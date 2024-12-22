import pyautogui
import pyperclip
import time

# Give some time to switch to the input field
time.sleep(5)

# Set the heart emoji to the clipboard
heart_emoji = "❤️"  # You can also try other representations like "\u2764" or "\U0001F496"

# Repeat the process 100 times
for _ in range(1000):
    # Paste the heart emoji using keyboard shortcut (Ctrl + V)
    pyperclip.copy(heart_emoji)
    pyautogui.hotkey("ctrl", "v")

    # Press Enter to submit the input (optional)
    pyautogui.press("enter")

    # Add a small delay between iterations (optional)
    time.sleep(0.1)
