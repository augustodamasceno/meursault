/*
 * Meursault JavaScript Library v1.0
 * https://github.com/augustodamasceno/meursault
 *
 * Copyright (c) 2020, Augusto Damasceno.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * copy2Clip - Copy the element with id "clipboard<digit>".
 * Example:
 *     Text to copy: <input id="clipboard1" type="hidden" value="SOME-TEXT"></input>
 *     Button Event: onclick="copy2Clip(1)"
 *
 * @param  {Number} clipNum number at the end of the element id "clipboard<digit>"
 * @return {Boolean} Flag with success state.
 */
async function copy2Clip(clipNum) {
  success = true;
  try {
    var textId = 'clipboard' + clipNum.toString();
    await navigator.clipboard.writeText(document.getElementById(textId).value);
  } catch (err) {
    success = false;
    console.log('Error trying to write in clipboard using element with id ' +
      textId);
  }

  return success;
}
