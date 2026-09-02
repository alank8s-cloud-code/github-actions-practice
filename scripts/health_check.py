import sys
import platform


def health_check():
    print("Running health check...")

    print(f"Python version: {platform.python_version()}")
    print(f"Platform: {platform.system()}")

    # Real test
    if sys.version_info >= (3, 8):
        print("Python version check: PASSED")
    else:
        print("Python version check: FAILED")
        return False

    print("Health check passed!")
    return True


if __name__ == "__main__":
    if health_check():
        sys.exit(0)
    else:
        sys.exit(1)
```
